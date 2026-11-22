"use server";

import { prisma } from "@/lib/prisma";

export async function getRecentBooks() {
	const books = await prisma.libro.findMany({
		take: 10,

		include: {
			escritor: {
				select: {
					id: true,
					alias: true,
				},
			},
		},
		where: {
			estadoId: 1,
		},
		orderBy: {
			fechaPublicacion: "desc",
		},
	});

	return books;
}
