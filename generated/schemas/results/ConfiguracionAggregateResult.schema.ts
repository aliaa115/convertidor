import * as z from "zod";
export const ConfiguracionAggregateResultSchema = z.object({
	_count: z
		.object({
			id: z.number(),
			valor: z.number(),
			createdAt: z.number(),
			updatedAt: z.number(),
			usuarioId: z.number(),
			usuario: z.number(),
			tipoId: z.number(),
			tipo: z.number(),
			estadoId: z.number(),
			estado: z.number(),
		})
		.optional(),
	_sum: z
		.object({
			id: z.number().nullable(),
			usuarioId: z.number().nullable(),
			tipoId: z.number().nullable(),
			estadoId: z.number().nullable(),
		})
		.nullable()
		.optional(),
	_avg: z
		.object({
			id: z.number().nullable(),
			usuarioId: z.number().nullable(),
			tipoId: z.number().nullable(),
			estadoId: z.number().nullable(),
		})
		.nullable()
		.optional(),
	_min: z
		.object({
			id: z.number().int().nullable(),
			valor: z.string().nullable(),
			createdAt: z.date().nullable(),
			updatedAt: z.date().nullable(),
			usuarioId: z.number().int().nullable(),
			tipoId: z.number().int().nullable(),
			estadoId: z.number().int().nullable(),
		})
		.nullable()
		.optional(),
	_max: z
		.object({
			id: z.number().int().nullable(),
			valor: z.string().nullable(),
			createdAt: z.date().nullable(),
			updatedAt: z.date().nullable(),
			usuarioId: z.number().int().nullable(),
			tipoId: z.number().int().nullable(),
			estadoId: z.number().int().nullable(),
		})
		.nullable()
		.optional(),
});
