import * as z from "zod";
export const CapituloFindManyResultSchema = z.object({
	data: z.array(
		z.object({
			id: z.number().int(),
			nombre: z.string().optional(),
			indice: z.number().int().optional(),
			createdAt: z.date(),
			updatedAt: z.date(),
			libroId: z.number().int(),
			libro: z.unknown(),
			estadoId: z.number().int(),
			estado: z.unknown(),
			parrafos: z.array(z.unknown()),
			notasAutor: z.array(z.unknown()),
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
