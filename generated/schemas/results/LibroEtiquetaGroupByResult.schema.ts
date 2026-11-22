import * as z from "zod";
export const LibroEtiquetaGroupByResultSchema = z.array(
	z.object({
		libroId: z.number().int(),
		etiquetaId: z.number().int(),
		createdAt: z.date(),
		updatedAt: z.date(),
		estadoId: z.number().int(),
		_count: z
			.object({
				libroId: z.number(),
				etiquetaId: z.number(),
				createdAt: z.number(),
				updatedAt: z.number(),
				estadoId: z.number(),
				estado: z.number(),
				libro: z.number(),
				etiqueta: z.number(),
			})
			.optional(),
		_sum: z
			.object({
				libroId: z.number().nullable(),
				etiquetaId: z.number().nullable(),
				estadoId: z.number().nullable(),
			})
			.nullable()
			.optional(),
		_avg: z
			.object({
				libroId: z.number().nullable(),
				etiquetaId: z.number().nullable(),
				estadoId: z.number().nullable(),
			})
			.nullable()
			.optional(),
		_min: z
			.object({
				libroId: z.number().int().nullable(),
				etiquetaId: z.number().int().nullable(),
				createdAt: z.date().nullable(),
				updatedAt: z.date().nullable(),
				estadoId: z.number().int().nullable(),
			})
			.nullable()
			.optional(),
		_max: z
			.object({
				libroId: z.number().int().nullable(),
				etiquetaId: z.number().int().nullable(),
				createdAt: z.date().nullable(),
				updatedAt: z.date().nullable(),
				estadoId: z.number().int().nullable(),
			})
			.nullable()
			.optional(),
	}),
);
