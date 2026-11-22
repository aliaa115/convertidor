import * as z from "zod";
// prettier-ignore
export const LibroCategoriaResultSchema = z
	.object({
		libroId: z.number().int(),
		categoriaId: z.number().int(),
		createdAt: z.date(),
		updatedAt: z.date(),
		estadoId: z.number().int(),
		estado: z.unknown(),
		libro: z.unknown(),
		categoria: z.unknown(),
	})
	.strict();

export type LibroCategoriaResultType = z.infer<
	typeof LibroCategoriaResultSchema
>;
