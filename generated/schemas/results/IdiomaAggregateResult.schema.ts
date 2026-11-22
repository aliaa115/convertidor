import * as z from "zod";
export const IdiomaAggregateResultSchema = z.object({
	_count: z
		.object({
			id: z.number(),
			nombre: z.number(),
			siglas: z.number(),
			createdAt: z.number(),
			updatedAt: z.number(),
			estadoId: z.number(),
			estado: z.number(),
			libros: z.number(),
		})
		.optional(),
	_sum: z
		.object({
			id: z.number().nullable(),
			estadoId: z.number().nullable(),
		})
		.nullable()
		.optional(),
	_avg: z
		.object({
			id: z.number().nullable(),
			estadoId: z.number().nullable(),
		})
		.nullable()
		.optional(),
	_min: z
		.object({
			id: z.number().int().nullable(),
			nombre: z.string().nullable(),
			siglas: z.string().nullable(),
			createdAt: z.date().nullable(),
			updatedAt: z.date().nullable(),
			estadoId: z.number().int().nullable(),
		})
		.nullable()
		.optional(),
	_max: z
		.object({
			id: z.number().int().nullable(),
			nombre: z.string().nullable(),
			siglas: z.string().nullable(),
			createdAt: z.date().nullable(),
			updatedAt: z.date().nullable(),
			estadoId: z.number().int().nullable(),
		})
		.nullable()
		.optional(),
});
