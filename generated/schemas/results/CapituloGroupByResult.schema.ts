import * as z from "zod";
export const CapituloGroupByResultSchema = z.array(
	z.object({
		id: z.number().int(),
		nombre: z.string(),
		indice: z.number().int(),
		createdAt: z.date(),
		updatedAt: z.date(),
		libroId: z.number().int(),
		estadoId: z.number().int(),
		_count: z
			.object({
				id: z.number(),
				nombre: z.number(),
				indice: z.number(),
				createdAt: z.number(),
				updatedAt: z.number(),
				libroId: z.number(),
				libro: z.number(),
				estadoId: z.number(),
				estado: z.number(),
				parrafos: z.number(),
				notasAutor: z.number(),
			})
			.optional(),
		_sum: z
			.object({
				id: z.number().nullable(),
				indice: z.number().nullable(),
				libroId: z.number().nullable(),
				estadoId: z.number().nullable(),
			})
			.nullable()
			.optional(),
		_avg: z
			.object({
				id: z.number().nullable(),
				indice: z.number().nullable(),
				libroId: z.number().nullable(),
				estadoId: z.number().nullable(),
			})
			.nullable()
			.optional(),
		_min: z
			.object({
				id: z.number().int().nullable(),
				nombre: z.string().nullable(),
				indice: z.number().int().nullable(),
				createdAt: z.date().nullable(),
				updatedAt: z.date().nullable(),
				libroId: z.number().int().nullable(),
				estadoId: z.number().int().nullable(),
			})
			.nullable()
			.optional(),
		_max: z
			.object({
				id: z.number().int().nullable(),
				nombre: z.string().nullable(),
				indice: z.number().int().nullable(),
				createdAt: z.date().nullable(),
				updatedAt: z.date().nullable(),
				libroId: z.number().int().nullable(),
				estadoId: z.number().int().nullable(),
			})
			.nullable()
			.optional(),
	}),
);
