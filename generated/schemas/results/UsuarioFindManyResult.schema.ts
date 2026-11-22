import * as z from "zod";
export const UsuarioFindManyResultSchema = z.object({
	data: z.array(
		z.object({
			id: z.number().int(),
			userName: z.string(),
			email: z.string(),
			password: z.string(),
			nivel: z.number().int(),
			createdAt: z.date(),
			updatedAt: z.date(),
			estadoId: z.number().int(),
			estado: z.unknown(),
			configuracion: z.unknown().optional(),
			escritor: z.unknown().optional(),
			listas: z.array(z.unknown()),
			notificacions: z.array(z.unknown()),
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
