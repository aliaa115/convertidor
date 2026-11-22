"use server";

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function getPersonalizedPopularBooks() {
	const user = await getCurrentUser();

	if (!user?.escritor?.id) return [];

	// 1. favoritos del usuario
	const favorites = await prisma.favorito.findMany({
		where: {
			escritorId: user.escritor.id,
			libroId: { not: null },
		},
		select: {
			libro: {
				select: {
					categorias: {
						select: {
							categoriaId: true,
						},
					},
				},
			},
		},
	});

	// 2. sacar categorias únicas
	const categoryIds = Array.from(
		new Set(
			favorites.flatMap(
				(f) => f.libro?.categorias.map((c) => c.categoriaId) ?? [],
			),
		),
	);

	if (categoryIds.length === 0) return [];

	// 3. buscar libros similares
	const books = await prisma.libro.findMany({
		take: 10,

		where: {
			estadoId: 1,
			categorias: {
				some: {
					categoriaId: { in: categoryIds },
				},
			},
		},

		include: {
			escritor: {
				select: {
					id: true,
					alias: true,
				},
			},
			_count: {
				select: {
					favoritos: true,
				},
			},
		},

		orderBy: {
			favoritos: {
				_count: "desc",
			},
		},
	});

	return books;
}
