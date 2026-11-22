import * as z from "zod";
export const LibroCategoriaUpdateResultSchema = z.nullable(
	z.object({
		libroId: z.number().int(),
		categoriaId: z.number().int(),
		createdAt: z.date(),
		updatedAt: z.date(),
		estadoId: z.number().int(),
		estado: z.unknown(),
		libro: z.unknown(),
		categoria: z.unknown(),
	}),
);
