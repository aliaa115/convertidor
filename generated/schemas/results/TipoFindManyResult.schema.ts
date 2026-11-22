import * as z from "zod";
export const TipoFindManyResultSchema = z.object({
	data: z.array(
		z.object({
			id: z.number().int(),
			nombre: z.string().optional(),
			tabla: z.string().optional(),
			estadoId: z.number().int(),
			estado: z.unknown(),
			configuraciones: z.array(z.unknown()),
			libros: z.array(z.unknown()),
			comentarios: z.array(z.unknown()),
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
