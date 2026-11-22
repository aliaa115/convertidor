import * as z from "zod";
export const LibroCategoriaUpsertResultSchema = z.object({
	libroId: z.number().int(),
	categoriaId: z.number().int(),
	createdAt: z.date(),
	updatedAt: z.date(),
	estadoId: z.number().int(),
	estado: z.unknown(),
	libro: z.unknown(),
	categoria: z.unknown(),
});
