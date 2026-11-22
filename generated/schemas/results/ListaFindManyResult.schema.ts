import * as z from "zod";
export const ListaFindManyResultSchema = z.object({
	data: z.array(
		z.object({
			id: z.number().int(),
			nombre: z.string().optional(),
			privada: z.boolean(),
			createdAt: z.date(),
			updatedAt: z.date(),
			usuarioId: z.number().int().optional(),
			usuario: z.unknown().optional(),
			estadoId: z.number().int(),
			estado: z.unknown(),
			libros: z.array(z.unknown()),
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
