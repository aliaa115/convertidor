"use server";

import { prisma } from "@/lib/prisma";

export async function getPopularBooks() {
	const books = await prisma.libro.findMany({
		take: 10,

		include: {
			escritor: {
				select: { id: true, alias: true },
			},

			_count: { select: { favoritos: true } },
		},
		where: { estadoId: 1 },
		orderBy: { favoritos: { _count: "desc" } },
	});

	return books;
}
