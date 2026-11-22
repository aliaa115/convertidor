import * as z from "zod";
export const LibroCategoriaAggregateResultSchema = z.object({
	_count: z
		.object({
			libroId: z.number(),
			categoriaId: z.number(),
			createdAt: z.number(),
			updatedAt: z.number(),
			estadoId: z.number(),
			estado: z.number(),
			libro: z.number(),
			categoria: z.number(),
		})
		.optional(),
	_sum: z
		.object({
			libroId: z.number().nullable(),
			categoriaId: z.number().nullable(),
			estadoId: z.number().nullable(),
		})
		.nullable()
		.optional(),
	_avg: z
		.object({
			libroId: z.number().nullable(),
			categoriaId: z.number().nullable(),
			estadoId: z.number().nullable(),
		})
		.nullable()
		.optional(),
	_min: z
		.object({
			libroId: z.number().int().nullable(),
			categoriaId: z.number().int().nullable(),
			createdAt: z.date().nullable(),
			updatedAt: z.date().nullable(),
			estadoId: z.number().int().nullable(),
		})
		.nullable()
		.optional(),
	_max: z
		.object({
			libroId: z.number().int().nullable(),
			categoriaId: z.number().int().nullable(),
			createdAt: z.date().nullable(),
			updatedAt: z.date().nullable(),
			estadoId: z.number().int().nullable(),
		})
		.nullable()
		.optional(),
});
