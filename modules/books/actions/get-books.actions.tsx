import { prisma } from "@/lib/prisma";

export async function getBookById({ id }: { id: string }) {
	const libro = await prisma.libro.findUnique({
		where: { id: Number(id) },
		include: {
			escritor: {
				include: {
					avatar: true,
				},
			},
			capitulos: {
				orderBy: { id: "asc" },
			},
		},
	});
	return libro;
}
