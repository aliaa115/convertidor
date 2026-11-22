import * as z from "zod";
export const GlosarioFindManyResultSchema = z.object({
	data: z.array(
		z.object({
			id: z.number().int(),
			palabra: z.string().optional(),
			significado: z.string().optional(),
			createdAt: z.date(),
			updatedAt: z.date(),
			libroId: z.number().int(),
			libro: z.unknown(),
			escritorId: z.number().int(),
			escritor: z.unknown(),
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
