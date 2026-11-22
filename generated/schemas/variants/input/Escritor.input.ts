import * as z from "zod";
// prettier-ignore
export const EscritorInputSchema = z
	.object({
		id: z.number().int(),
		nombres: z.string().optional().nullable(),
		apellidos: z.string().optional().nullable(),
		alias: z.string().optional().nullable(),
		descripcion: z.string().optional().nullable(),
		fechaNacimiento: z.date().optional().nullable(),
		createdAt: z.date(),
		updatedAt: z.date(),
		usuarioId: z.number().int().optional().nullable(),
		usuario: z.unknown().optional().nullable(),
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

export type EscritorInputType = z.infer<typeof EscritorInputSchema>;
