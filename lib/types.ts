import { Prisma } from "@/generated/prisma/client";

export type CurrentUser = Prisma.UsuarioGetPayload<{
	include: {
		notificacions: true;
		escritor: {
			include: {
				avatar: true;
			};
		};
	};
}>;
export type WritterUser = Prisma.EscritorGetPayload<{
	include: {
		usuario: {
			include: {
				listas: { include: { libros: true } };
				configuracion?: true;
			};
		};
		avatar: true;
		libros: { where: { publicado: true } };
		siguiendo: { include: { escritor: { include: { usuario: true } } } };
		seguidores: { include: { escritor: { include: { usuario: true } } } };
	};
}>;
