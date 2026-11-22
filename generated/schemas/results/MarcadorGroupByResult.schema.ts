import * as z from "zod";
export const MarcadorGroupByResultSchema = z.array(
	z.object({
		id: z.number().int(),
		nombre: z.string(),
		color: z.string(),
		createdAt: z.date(),
		updatedAt: z.date(),
		escritorId: z.number().int(),
		parrafoId: z.number().int(),
		estadoId: z.number().int(),
		_count: z
			.object({
				id: z.number(),
				nombre: z.number(),
				color: z.number(),
				createdAt: z.number(),
				updatedAt: z.number(),
				escritorId: z.number(),
				escritor: z.number(),
				parrafoId: z.number(),
				parrafo: z.number(),
				estadoId: z.number(),
				estado: z.number(),
			})
			.optional(),
		_sum: z
			.object({
				id: z.number().nullable(),
				escritorId: z.number().nullable(),
				parrafoId: z.number().nullable(),
				estadoId: z.number().nullable(),
			})
			.nullable()
			.optional(),
		_avg: z
			.object({
				id: z.number().nullable(),
				escritorId: z.number().nullable(),
				parrafoId: z.number().nullable(),
				estadoId: z.number().nullable(),
			})
			.nullable()
			.optional(),
		_min: z
			.object({
				id: z.number().int().nullable(),
				nombre: z.string().nullable(),
				color: z.string().nullable(),
				createdAt: z.date().nullable(),
				updatedAt: z.date().nullable(),
				escritorId: z.number().int().nullable(),
				parrafoId: z.number().int().nullable(),
				estadoId: z.number().int().nullable(),
			})
			.nullable()
			.optional(),
		_max: z
			.object({
				id: z.number().int().nullable(),
				nombre: z.string().nullable(),
				color: z.string().nullable(),
				createdAt: z.date().nullable(),
				updatedAt: z.date().nullable(),
				escritorId: z.number().int().nullable(),
				parrafoId: z.number().int().nullable(),
				estadoId: z.number().int().nullable(),
			})
			.nullable()
			.optional(),
	}),
);
