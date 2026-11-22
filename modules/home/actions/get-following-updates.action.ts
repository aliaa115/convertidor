"use server";

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function getFollowingUpdates() {
	const user = await getCurrentUser();

	if (!user?.escritor?.id) return [];

	const books = await prisma.libro.findMany({
		take: 10,

		where: {
			estadoId: 1,
			publicado: true,
			escritor: {
				seguidores: {
					some: {
						escritorId: user.escritor.id,
					},
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
		},

		orderBy: {
			fechaPublicacion: "desc",
		},
	});

	return books;
}
