import * as z from "zod";
export const FavoritoFindManyResultSchema = z.object({
	data: z.array(
		z.object({
			id: z.number().int(),
			createdAt: z.date(),
			updatedAt: z.date(),
			escritorId: z.number().int().optional(),
			escritor: z.unknown().optional(),
			libroId: z.number().int().optional(),
			libro: z.unknown().optional(),
			estadoId: z.number().int(),
			estado: z.unknown(),
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
