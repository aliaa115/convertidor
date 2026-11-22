import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";
import { Pool } from "pg";
import { PrismaClient } from "@/generated/prisma/client";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
	throw new Error("DATABASE_URL no está definida");
}

const adapter = new PrismaPg(
	new Pool({
		connectionString,
	}),
);

const prisma = new PrismaClient({ adapter });

async function main() {
	await prisma.estado.createMany({
		data: [
			{ id: 1, nombre: "activo", color: "#22c55e", icon: "check" },
			{ id: 2, nombre: "inactivo", color: "#6b7280", icon: "pause" },
			{ id: 3, nombre: "eliminado", color: "#ef4444", icon: "trash" },
			{ id: 4, nombre: "finalizado", color: "primary", icon: "check" },
		],
		skipDuplicates: true,
	});

	await prisma.avatar.createMany({
		data: [
			{ id: 1, nombre: "Avatar 1", url: "/avatars/default-1.svg" },
			{ id: 2, nombre: "Avatar 2", url: "/avatars/default-2.svg" },
			{ id: 3, nombre: "Avatar 3", url: "/avatars/default-3.svg" },
			{ id: 4, nombre: "Avatar 4", url: "/avatars/default-4.svg" },
			{ id: 5, nombre: "Avatar 5", url: "/avatars/default-5.svg" },
			{ id: 6, nombre: "Avatar 6", url: "/avatars/default-6.svg" },
		],
		skipDuplicates: true,
	});

	await prisma.idioma.createMany({
		data: [{ id: 1, nombre: "Español", siglas: "ES", estadoId: 1 }],
		skipDuplicates: true,
	});

	await prisma.tipo.createMany({
		data: [
			{ id: 1, nombre: "Libro", tabla: "Libro", estadoId: 1 },
			{ id: 2, nombre: "Traduccion", tabla: "Libro", estadoId: 1 },
			{ id: 3, nombre: "Fanfic", tabla: "Libro", estadoId: 1 },
		],
		skipDuplicates: true,
	});

	await prisma.usuario.createMany({
		data: [
			{
				id: 1,
				userName: "admin",
				email: "admin@example.com",
				password: await bcrypt.hash("12345678", 10),
				nivel: 1,
				estadoId: 1,
			},
			{
				id: 2,
				userName: "user",
				email: "user@example.com",
				password: await bcrypt.hash("12345678", 10),
				nivel: 2,
				estadoId: 1,
			},
		],
		skipDuplicates: true,
	});

	await prisma.escritor.createMany({
		data: [
			{
				id: 1,
				nombres: "Juan",
				apellidos: "Perez",
				alias: "juanperez",
				fechaNacimiento: new Date("1990-01-01"),
				usuarioId: 1,
				estadoId: 1,
			},
			{
				id: 2,
				nombres: "Maria",
				apellidos: "Perez",
				alias: "mariaperez",
				fechaNacimiento: new Date("1990-01-01"),
				usuarioId: 2,
				estadoId: 1,
			},
		],
		skipDuplicates: true,
	});

	await prisma.libro.createMany({
		data: [
			{
				id: 1,
				titulo: "El libro de Juan Perez",
				resumen: "Este es un libro de Juan Perez",
				portada: "Este es el portada del libro de Juan Perez",
				estadoId: 1,
				escritorId: 1,
				idiomaId: 1,
				tipoId: 1,
			},
			{
				id: 2,
				titulo: "El libro de Maria Perez",
				resumen: "Este es un libro de Maria Perez",
				portada: "Este es el portada del libro de Maria Perez",
				estadoId: 1,
				escritorId: 2,
				idiomaId: 1,
				tipoId: 1,
			},
		],
		skipDuplicates: true,
	});

	console.log("Seed completado");
}

main()
	.catch((e) => {
		console.error("Error en seed:", e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
