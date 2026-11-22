import * as z from "zod";
export const ParrafoGroupByResultSchema = z.array(
	z.object({
		id: z.number().int(),
		contenido: z.string(),
		indice: z.number().int(),
		createdAt: z.date(),
		updatedAt: z.date(),
		capituloId: z.number().int(),
		estadoId: z.number().int(),
		_count: z
			.object({
				id: z.number(),
				contenido: z.number(),
				indice: z.number(),
				createdAt: z.number(),
				updatedAt: z.number(),
				capituloId: z.number(),
				capitulo: z.number(),
				estadoId: z.number(),
				estado: z.number(),
				comentarios: z.number(),
				marcadores: z.number(),
			})
			.optional(),
		_sum: z
			.object({
				id: z.number().nullable(),
				indice: z.number().nullable(),
				capituloId: z.number().nullable(),
				estadoId: z.number().nullable(),
			})
			.nullable()
			.optional(),
		_avg: z
			.object({
				id: z.number().nullable(),
				indice: z.number().nullable(),
				capituloId: z.number().nullable(),
				estadoId: z.number().nullable(),
			})
			.nullable()
			.optional(),
		_min: z
			.object({
				id: z.number().int().nullable(),
				contenido: z.string().nullable(),
				indice: z.number().int().nullable(),
				createdAt: z.date().nullable(),
				updatedAt: z.date().nullable(),
				capituloId: z.number().int().nullable(),
				estadoId: z.number().int().nullable(),
			})
			.nullable()
			.optional(),
		_max: z
			.object({
				id: z.number().int().nullable(),
				contenido: z.string().nullable(),
				indice: z.number().int().nullable(),
				createdAt: z.date().nullable(),
				updatedAt: z.date().nullable(),
				capituloId: z.number().int().nullable(),
				estadoId: z.number().int().nullable(),
			})
			.nullable()
			.optional(),
	}),
);
