import * as z from "zod";
export const ComentarioGroupByResultSchema = z.array(
	z.object({
		id: z.number().int(),
		contenido: z.string(),
		createdAt: z.date(),
		updatedAt: z.date(),
		escritorId: z.number().int(),
		parrafoId: z.number().int(),
		comentarioPadreId: z.number().int(),
		tipoId: z.number().int(),
		estadoId: z.number().int(),
		_count: z
			.object({
				id: z.number(),
				contenido: z.number(),
				createdAt: z.number(),
				updatedAt: z.number(),
				escritorId: z.number(),
				escritor: z.number(),
				parrafoId: z.number(),
				parrafo: z.number(),
				comentarioPadreId: z.number(),
				padre: z.number(),
				respuestas: z.number(),
				tipoId: z.number(),
				tipo: z.number(),
				estadoId: z.number(),
				estado: z.number(),
			})
			.optional(),
		_sum: z
			.object({
				id: z.number().nullable(),
				escritorId: z.number().nullable(),
				parrafoId: z.number().nullable(),
				comentarioPadreId: z.number().nullable(),
				tipoId: z.number().nullable(),
				estadoId: z.number().nullable(),
			})
			.nullable()
			.optional(),
		_avg: z
			.object({
				id: z.number().nullable(),
				escritorId: z.number().nullable(),
				parrafoId: z.number().nullable(),
				comentarioPadreId: z.number().nullable(),
				tipoId: z.number().nullable(),
				estadoId: z.number().nullable(),
			})
			.nullable()
			.optional(),
		_min: z
			.object({
				id: z.number().int().nullable(),
				contenido: z.string().nullable(),
				createdAt: z.date().nullable(),
				updatedAt: z.date().nullable(),
				escritorId: z.number().int().nullable(),
				parrafoId: z.number().int().nullable(),
				comentarioPadreId: z.number().int().nullable(),
				tipoId: z.number().int().nullable(),
				estadoId: z.number().int().nullable(),
			})
			.nullable()
			.optional(),
		_max: z
			.object({
				id: z.number().int().nullable(),
				contenido: z.string().nullable(),
				createdAt: z.date().nullable(),
				updatedAt: z.date().nullable(),
				escritorId: z.number().int().nullable(),
				parrafoId: z.number().int().nullable(),
				comentarioPadreId: z.number().int().nullable(),
				tipoId: z.number().int().nullable(),
				estadoId: z.number().int().nullable(),
			})
			.nullable()
			.optional(),
	}),
);
