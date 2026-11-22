import * as z from "zod";
export const UsuarioAggregateResultSchema = z.object({
	_count: z
		.object({
			id: z.number(),
			userName: z.number(),
			email: z.number(),
			password: z.number(),
			nivel: z.number(),
			createdAt: z.number(),
			updatedAt: z.number(),
			estadoId: z.number(),
			estado: z.number(),
			configuracion: z.number(),
			escritor: z.number(),
			listas: z.number(),
			notificacions: z.number(),
		})
		.optional(),
	_sum: z
		.object({
			id: z.number().nullable(),
			nivel: z.number().nullable(),
			estadoId: z.number().nullable(),
		})
		.nullable()
		.optional(),
	_avg: z
		.object({
			id: z.number().nullable(),
			nivel: z.number().nullable(),
			estadoId: z.number().nullable(),
		})
		.nullable()
		.optional(),
	_min: z
		.object({
			id: z.number().int().nullable(),
			userName: z.string().nullable(),
			email: z.string().nullable(),
			password: z.string().nullable(),
			nivel: z.number().int().nullable(),
			createdAt: z.date().nullable(),
			updatedAt: z.date().nullable(),
			estadoId: z.number().int().nullable(),
		})
		.nullable()
		.optional(),
	_max: z
		.object({
			id: z.number().int().nullable(),
			userName: z.string().nullable(),
			email: z.string().nullable(),
			password: z.string().nullable(),
			nivel: z.number().int().nullable(),
			createdAt: z.date().nullable(),
			updatedAt: z.date().nullable(),
			estadoId: z.number().int().nullable(),
		})
		.nullable()
		.optional(),
});
