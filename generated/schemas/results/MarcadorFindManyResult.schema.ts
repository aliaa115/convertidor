import * as z from "zod";
export const MarcadorFindManyResultSchema = z.object({
	data: z.array(
		z.object({
			id: z.number().int(),
			nombre: z.string().optional(),
			color: z.string().optional(),
			createdAt: z.date(),
			updatedAt: z.date(),
			escritorId: z.number().int(),
			escritor: z.unknown(),
			parrafoId: z.number().int(),
			parrafo: z.unknown(),
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
