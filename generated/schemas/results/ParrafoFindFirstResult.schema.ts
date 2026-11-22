import * as z from "zod";
export const ParrafoFindFirstResultSchema = z.nullable(
	z.object({
		id: z.number().int(),
		contenido: z.string().optional(),
		indice: z.number().int().optional(),
		createdAt: z.date(),
		updatedAt: z.date(),
		capituloId: z.number().int(),
		capitulo: z.unknown(),
		estadoId: z.number().int(),
		estado: z.unknown(),
		comentarios: z.array(z.unknown()),
		marcadores: z.array(z.unknown()),
	}),
);
