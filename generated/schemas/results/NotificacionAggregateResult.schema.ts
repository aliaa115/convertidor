import * as z from "zod";
export const NotificacionAggregateResultSchema = z.object({
	_count: z
		.object({
			id: z.number(),
			titulo: z.number(),
			mensaje: z.number(),
			tipo: z.number(),
			leida: z.number(),
			usuarioId: z.number(),
			usuario: z.number(),
			entidadId: z.number(),
			entidadTipo: z.number(),
			createdAt: z.number(),
			updatedAt: z.number(),
		})
		.optional(),
	_sum: z
		.object({
			id: z.number().nullable(),
			usuarioId: z.number().nullable(),
			entidadId: z.number().nullable(),
		})
		.nullable()
		.optional(),
	_avg: z
		.object({
			id: z.number().nullable(),
			usuarioId: z.number().nullable(),
			entidadId: z.number().nullable(),
		})
		.nullable()
		.optional(),
	_min: z
		.object({
			id: z.number().int().nullable(),
			titulo: z.string().nullable(),
			mensaje: z.string().nullable(),
			usuarioId: z.number().int().nullable(),
			entidadId: z.number().int().nullable(),
			createdAt: z.date().nullable(),
			updatedAt: z.date().nullable(),
		})
		.nullable()
		.optional(),
	_max: z
		.object({
			id: z.number().int().nullable(),
			titulo: z.string().nullable(),
			mensaje: z.string().nullable(),
			usuarioId: z.number().int().nullable(),
			entidadId: z.number().int().nullable(),
			createdAt: z.date().nullable(),
			updatedAt: z.date().nullable(),
		})
		.nullable()
		.optional(),
});
