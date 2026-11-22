import * as z from "zod";
export const FavoritoAggregateResultSchema = z.object({
	_count: z
		.object({
			id: z.number(),
			createdAt: z.number(),
			updatedAt: z.number(),
			escritorId: z.number(),
			escritor: z.number(),
			libroId: z.number(),
			libro: z.number(),
			estadoId: z.number(),
			estado: z.number(),
		})
		.optional(),
	_sum: z
		.object({
			id: z.number().nullable(),
			escritorId: z.number().nullable(),
			libroId: z.number().nullable(),
			estadoId: z.number().nullable(),
		})
		.nullable()
		.optional(),
	_avg: z
		.object({
			id: z.number().nullable(),
			escritorId: z.number().nullable(),
			libroId: z.number().nullable(),
			estadoId: z.number().nullable(),
		})
		.nullable()
		.optional(),
	_min: z
		.object({
			id: z.number().int().nullable(),
			createdAt: z.date().nullable(),
			updatedAt: z.date().nullable(),
			escritorId: z.number().int().nullable(),
			libroId: z.number().int().nullable(),
			estadoId: z.number().int().nullable(),
		})
		.nullable()
		.optional(),
	_max: z
		.object({
			id: z.number().int().nullable(),
			createdAt: z.date().nullable(),
			updatedAt: z.date().nullable(),
			escritorId: z.number().int().nullable(),
			libroId: z.number().int().nullable(),
			estadoId: z.number().int().nullable(),
		})
		.nullable()
		.optional(),
});
