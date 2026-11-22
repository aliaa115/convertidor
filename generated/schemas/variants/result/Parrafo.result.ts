import * as z from "zod";
// prettier-ignore
export const ParrafoResultSchema = z
	.object({
		id: z.number().int(),
		contenido: z.string().nullable(),
		indice: z.number().int().nullable(),
		createdAt: z.date(),
		updatedAt: z.date(),
		capituloId: z.number().int(),
		capitulo: z.unknown(),
		estadoId: z.number().int(),
		estado: z.unknown(),
		comentarios: z.array(z.unknown()),
		marcadores: z.array(z.unknown()),
	})
	.strict();

export type ParrafoResultType = z.infer<typeof ParrafoResultSchema>;
