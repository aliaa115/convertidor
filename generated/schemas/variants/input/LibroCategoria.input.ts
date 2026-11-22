import * as z from "zod";
// prettier-ignore
export const LibroCategoriaInputSchema = z
	.object({
		libroId: z.number().int(),
		categoriaId: z.number().int(),
		createdAt: z.coerce.date(),
		updatedAt: z.coerce.date(),
		estadoId: z.number().int(),
		estado: z.unknown(),
		libro: z.unknown(),
		categoria: z.unknown(),
	})
	.strict();

export type LibroCategoriaInputType = z.infer<typeof LibroCategoriaInputSchema>;
