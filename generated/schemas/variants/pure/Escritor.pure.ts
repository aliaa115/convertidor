import * as z from "zod";
// prettier-ignore
export const EscritorModelSchema = z
	.object({
		id: z.number().int(),
		nombres: z.string().nullable(),
		apellidos: z.string().nullable(),
		alias: z.string().nullable(),
		descripcion: z.string().nullable(),
		fechaNacimiento: z.date().nullable(),
		createdAt: z.date(),
		updatedAt: z.date(),
		usuarioId: z.number().int().nullable(),
		usuario: z.unknown().nullable(),
		avatarId: z.number().int(),
		avatar: z.unknown(),
		estadoId: z.number().int(),
		estado: z.unknown(),
		libros: z.array(z.unknown()),
		comentarios: z.array(z.unknown()),
		favoritos: z.array(z.unknown()),
		glosarios: z.array(z.unknown()),
		notasAutor: z.array(z.unknown()),
		marcadores: z.array(z.unknown()),
		seguidores: z.array(z.unknown()),
		siguiendo: z.array(z.unknown()),
	})
	.strict();

export type EscritorPureType = z.infer<typeof EscritorModelSchema>;
