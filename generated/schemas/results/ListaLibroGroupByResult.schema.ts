import * as z from "zod";
export const ListaLibroGroupByResultSchema = z.array(
	z.object({
		id: z.number().int(),
		createdAt: z.date(),
		updatedAt: z.date(),
		listaId: z.number().int(),
		libroId: z.number().int(),
		estadoId: z.number().int(),
		_count: z
			.object({
				id: z.number(),
				createdAt: z.number(),
				updatedAt: z.number(),
				listaId: z.number(),
				lista: z.number(),
				libroId: z.number(),
				libro: z.number(),
				estadoId: z.number(),
				estado: z.number(),
			})
			.optional(),
		_sum: z
			.object({
				id: z.number().nullable(),
				listaId: z.number().nullable(),
				libroId: z.number().nullable(),
				estadoId: z.number().nullable(),
			})
			.nullable()
			.optional(),
		_avg: z
			.object({
				id: z.number().nullable(),
				listaId: z.number().nullable(),
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
				listaId: z.number().int().nullable(),
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
				listaId: z.number().int().nullable(),
				libroId: z.number().int().nullable(),
				estadoId: z.number().int().nullable(),
			})
			.nullable()
			.optional(),
	}),
);
