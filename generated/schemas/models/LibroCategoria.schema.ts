import * as z from "zod";

export const LibroCategoriaSchema = z.object({
	libroId: z.number().int(),
	categoriaId: z.number().int(),
	createdAt: z.date(),
	updatedAt: z.date(),
	estadoId: z.number().int().default(1),
});

export type LibroCategoriaType = z.infer<typeof LibroCategoriaSchema>;
