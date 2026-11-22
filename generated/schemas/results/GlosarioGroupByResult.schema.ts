import * as z from "zod";
export const GlosarioGroupByResultSchema = z.array(
	z.object({
		id: z.number().int(),
		palabra: z.string(),
		significado: z.string(),
		createdAt: z.date(),
		updatedAt: z.date(),
		libroId: z.number().int(),
		escritorId: z.number().int(),
		estadoId: z.number().int(),
		_count: z
			.object({
				id: z.number(),
				palabra: z.number(),
				significado: z.number(),
				createdAt: z.number(),
				updatedAt: z.number(),
				libroId: z.number(),
				libro: z.number(),
				escritorId: z.number(),
				escritor: z.number(),
				estadoId: z.number(),
				estado: z.number(),
			})
			.optional(),
		_sum: z
			.object({
				id: z.number().nullable(),
				libroId: z.number().nullable(),
				escritorId: z.number().nullable(),
				estadoId: z.number().nullable(),
			})
			.nullable()
			.optional(),
		_avg: z
			.object({
				id: z.number().nullable(),
				libroId: z.number().nullable(),
				escritorId: z.number().nullable(),
				estadoId: z.number().nullable(),
			})
			.nullable()
			.optional(),
		_min: z
			.object({
				id: z.number().int().nullable(),
				palabra: z.string().nullable(),
				significado: z.string().nullable(),
				createdAt: z.date().nullable(),
				updatedAt: z.date().nullable(),
				libroId: z.number().int().nullable(),
				escritorId: z.number().int().nullable(),
				estadoId: z.number().int().nullable(),
			})
			.nullable()
			.optional(),
		_max: z
			.object({
				id: z.number().int().nullable(),
				palabra: z.string().nullable(),
				significado: z.string().nullable(),
				createdAt: z.date().nullable(),
				updatedAt: z.date().nullable(),
				libroId: z.number().int().nullable(),
				escritorId: z.number().int().nullable(),
				estadoId: z.number().int().nullable(),
			})
			.nullable()
			.optional(),
	}),
);
