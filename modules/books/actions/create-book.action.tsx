"use server";

import { randomUUID } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { createBookSchema } from "../schemas/create-book.schema";

type CreateBookState = {
	error?: string;
};

function normalizeNames(values: string[]) {
	const map = new Map<string, string>();

	for (const raw of values) {
		const normalized = raw.trim().replace(/\s+/g, " ");
		if (!normalized) continue;

		const key = normalized.toLowerCase();
		if (!map.has(key)) {
			map.set(key, normalized);
		}
	}

	return Array.from(map.values());
}

function isFileLike(value: FormDataEntryValue | null): value is File {
	return (
		typeof value === "object" &&
		value !== null &&
		"arrayBuffer" in value &&
		"size" in value &&
		"type" in value &&
		"name" in value
	);
}

async function saveCover(file: File) {
	const dir = path.join(process.cwd(), "public", "uploads", "books");
	await fs.mkdir(dir, { recursive: true });

	const ext = path.extname(file.name) || ".png";
	const filename = `${Date.now()}-${randomUUID()}${ext}`;
	const filepath = path.join(dir, filename);

	const buffer = Buffer.from(await file.arrayBuffer());
	await fs.writeFile(filepath, buffer);

	return `/uploads/books/${filename}`;
}

export async function createBookAction(
	_prevState: CreateBookState,
	formData: FormData,
): Promise<CreateBookState> {
	const user = await getCurrentUser();

	if (!user?.escritor?.id) {
		return { error: "Debes iniciar sesión como escritor." };
	}

	const portadaEntry = formData.get("portada");

	let portadaUrl: string | undefined;

	if (isFileLike(portadaEntry) && portadaEntry.size > 0) {
		if (!portadaEntry.type.startsWith("image/")) {
			return { error: "La portada debe ser una imagen válida." };
		}

		if (portadaEntry.size > 5 * 1024 * 1024) {
			return { error: "La portada no puede pesar más de 5MB." };
		}

		portadaUrl = await saveCover(portadaEntry);
	}

	const raw = {
		titulo: String(formData.get("titulo") ?? ""),
		resumen: String(formData.get("resumen") ?? ""),
		idiomaId: formData.get("idiomaId"),
		tipoId: formData.get("tipoId"),
		intro: String(formData.get("intro") ?? ""),
		categorias: formData.getAll("categorias"),
		etiquetas: formData.getAll("etiquetas"),
	};

	const parsed = createBookSchema.safeParse(raw);

	if (!parsed.success) {
		return {
			error: parsed.error.issues[0]?.message ?? "Datos inválidos.",
		};
	}

	const { titulo, resumen, idiomaId, tipoId, intro } = parsed.data;
	const categorias = normalizeNames(parsed.data.categorias);
	const etiquetas = normalizeNames(parsed.data.etiquetas);

	const libro = await prisma.libro.create({
		data: {
			titulo,
			resumen,
			fechaPublicacion: new Date(),
			...(portadaUrl ? { portada: portadaUrl } : {}),
			escritor: {
				connect: {
					id: user.escritor.id,
				},
			},
			idioma: {
				connect: {
					id: idiomaId,
				},
			},
			tipo: {
				connect: {
					id: tipoId,
				},
			},
			estado: {
				connect: {
					id: 1,
				},
			},
		},
	});

	// -------- CATEGORÍAS --------

	if (categorias.length > 0) {
		const existingCategorias = await prisma.categoria.findMany({
			where: {
				OR: categorias.map((nombre) => ({
					nombre: {
						equals: nombre,
						mode: "insensitive",
					},
				})),
			},
			select: {
				id: true,
				nombre: true,
			},
		});

		const existingCategoriaNames = new Set(
			existingCategorias
				.map((item) => item.nombre?.trim().toLowerCase())
				.filter(Boolean),
		);

		const categoriasToCreate = categorias.filter(
			(nombre) => !existingCategoriaNames.has(nombre.trim().toLowerCase()),
		);

		if (categoriasToCreate.length > 0) {
			await prisma.categoria.createMany({
				data: categoriasToCreate.map((nombre) => ({
					nombre,
					estadoId: 1,
				})),
				skipDuplicates: true,
			});
		}

		const finalCategorias = await prisma.categoria.findMany({
			where: {
				OR: categorias.map((nombre) => ({
					nombre: {
						equals: nombre,
						mode: "insensitive",
					},
				})),
			},
			select: {
				id: true,
			},
		});

		if (finalCategorias.length > 0) {
			await prisma.libroCategoria.createMany({
				data: finalCategorias.map((categoria) => ({
					libroId: libro.id,
					categoriaId: categoria.id,
					estadoId: 1,
				})),
				skipDuplicates: true,
			});
		}
	}

	// -------- ETIQUETAS --------

	if (etiquetas.length > 0) {
		const existingEtiquetas = await prisma.etiqueta.findMany({
			where: {
				OR: etiquetas.map((nombre) => ({
					nombre: {
						equals: nombre,
						mode: "insensitive",
					},
				})),
			},
			select: {
				id: true,
				nombre: true,
			},
		});

		const existingEtiquetaNames = new Set(
			existingEtiquetas
				.map((item) => item.nombre?.trim().toLowerCase())
				.filter(Boolean),
		);

		const etiquetasToCreate = etiquetas.filter(
			(nombre) => !existingEtiquetaNames.has(nombre.trim().toLowerCase()),
		);

		if (etiquetasToCreate.length > 0) {
			await prisma.etiqueta.createMany({
				data: etiquetasToCreate.map((nombre) => ({
					nombre,
					estadoId: 1,
				})),
				skipDuplicates: true,
			});
		}

		const finalEtiquetas = await prisma.etiqueta.findMany({
			where: {
				OR: etiquetas.map((nombre) => ({
					nombre: {
						equals: nombre,
						mode: "insensitive",
					},
				})),
			},
			select: {
				id: true,
			},
		});

		if (finalEtiquetas.length > 0) {
			await prisma.libroEtiqueta.createMany({
				data: finalEtiquetas.map((etiqueta) => ({
					libroId: libro.id,
					etiquetaId: etiqueta.id,
					estadoId: 1,
				})),
				skipDuplicates: true,
			});
		}
	}

	// -------- INTRO / CAPÍTULO INICIAL --------

	const contenidoInicial = intro?.trim() || resumen;

	await prisma.capitulo.create({
		data: {
			libroId: libro.id,
			nombre: "Introducción",
			indice: 1,
			estadoId: 1,
			parrafos: {
				create: [
					{
						contenido: contenidoInicial,
						indice: 1,
						estadoId: 1,
					},
				],
			},
		},
	});

	redirect(`/book/${libro.id}`);
}
