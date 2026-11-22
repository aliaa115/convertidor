import { NextRequest } from "next/server";
import { generarImagen } from "@/lib/generar-imagen";
import { prisma } from "@/lib/prisma";
import { isValidUrl } from "@/lib/utils";

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> },
) {
	const { id } = await params;
	const numericId = Number(id);

	if (isNaN(numericId))
		return new Response("Libro no encontrado", { status: 404 });

	const { searchParams } = new URL(req.url);

	const bg = searchParams.get("bg") ?? "#0f172a";
	const color = searchParams.get("color") ?? "#f8fafc";
	const fontSize = Number(searchParams.get("size") ?? 48);
	const padding = searchParams.get("padding") ?? 2;
	const width = Number(searchParams.get("w") ?? 600);
	const height = Number(searchParams.get("h") ?? 900);

	const book = await prisma.libro.findFirst({
		where: { id: numericId },
		select: {
			titulo: true,
			portada: true,
		},
	});

	if (!book) {
		return generarImagen({
			text: "Libro no encontrado",
			width,
			height,
			backgroundColor: bg,
			textColor: color,
			fontSize,
			padding,
		});
	}

	if (book.portada && isValidUrl(book.portada)) {
		return Response.redirect(book.portada);
	}

	return generarImagen({
		text: book.titulo ?? "Libro sin título",
		width,
		height,
		backgroundColor: bg,
		textColor: color,
		fontSize,
		padding,
	});
}
