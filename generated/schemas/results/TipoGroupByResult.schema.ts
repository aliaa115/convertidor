import * as z from "zod";
export const TipoGroupByResultSchema = z.array(
	z.object({
		id: z.number().int(),
		nombre: z.string(),
		tabla: z.string(),
		estadoId: z.number().int(),
		_count: z
			.object({
				id: z.number(),
				nombre: z.number(),
				tabla: z.number(),
				estadoId: z.number(),
				estado: z.number(),
				configuraciones: z.number(),
				libros: z.number(),
				comentarios: z.number(),
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
				tabla: z.string().nullable(),
				estadoId: z.number().int().nullable(),
			})
			.nullable()
			.optional(),
		_max: z
			.object({
				id: z.number().int().nullable(),
				nombre: z.string().nullable(),
				tabla: z.string().nullable(),
				estadoId: z.number().int().nullable(),
			})
			.nullable()
			.optional(),
	}),
);
