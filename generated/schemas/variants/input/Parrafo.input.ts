import * as z from "zod";
// prettier-ignore
export const ParrafoInputSchema = z
	.object({
		id: z.number().int(),
		contenido: z.string().optional().nullable(),
		indice: z.number().int().optional().nullable(),
		createdAt: z.coerce.date(),
		updatedAt: z.coerce.date(),
		capituloId: z.number().int(),
		capitulo: z.unknown(),
		estadoId: z.number().int(),
		estado: z.unknown(),
		comentarios: z.array(z.unknown()),
		marcadores: z.array(z.unknown()),
	})
	.strict();

export type ParrafoInputType = z.infer<typeof ParrafoInputSchema>;
