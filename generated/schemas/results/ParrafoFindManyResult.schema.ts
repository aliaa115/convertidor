import * as z from "zod";
export const ParrafoFindManyResultSchema = z.object({
	data: z.array(
		z.object({
			id: z.number().int(),
			contenido: z.string().optional(),
			indice: z.number().int().optional(),
			createdAt: z.date(),
			updatedAt: z.date(),
			capituloId: z.number().int(),
			capitulo: z.unknown(),
			estadoId: z.number().int(),
			estado: z.unknown(),
			comentarios: z.array(z.unknown()),
			marcadores: z.array(z.unknown()),
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
