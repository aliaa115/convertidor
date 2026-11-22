import * as z from "zod";
export const LibroCategoriaFindManyResultSchema = z.object({
	data: z.array(
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
	),
	pagination: z.object({
		page: z.number().int().min(1),
		pageSize: z.number().int().min(1),
		total: z.number().int().min(0),
		totalPages: z.number().int().min(0),
		hasNext: z.boolean(),
		hasPrev: z.boolean(),
	}),
});
