import * as z from "zod";
export const ListaGroupByResultSchema = z.array(
	z.object({
		id: z.number().int(),
		nombre: z.string(),
		privada: z.boolean(),
		createdAt: z.date(),
		updatedAt: z.date(),
		usuarioId: z.number().int(),
		estadoId: z.number().int(),
		_count: z
			.object({
				id: z.number(),
				nombre: z.number(),
				privada: z.number(),
				createdAt: z.number(),
				updatedAt: z.number(),
				usuarioId: z.number(),
				usuario: z.number(),
				estadoId: z.number(),
				estado: z.number(),
				libros: z.number(),
			})
			.optional(),
		_sum: z
			.object({
				id: z.number().nullable(),
				usuarioId: z.number().nullable(),
				estadoId: z.number().nullable(),
			})
			.nullable()
			.optional(),
		_avg: z
			.object({
				id: z.number().nullable(),
				usuarioId: z.number().nullable(),
				estadoId: z.number().nullable(),
			})
			.nullable()
			.optional(),
		_min: z
			.object({
				id: z.number().int().nullable(),
				nombre: z.string().nullable(),
				createdAt: z.date().nullable(),
				updatedAt: z.date().nullable(),
				usuarioId: z.number().int().nullable(),
				estadoId: z.number().int().nullable(),
			})
			.nullable()
			.optional(),
		_max: z
			.object({
				id: z.number().int().nullable(),
				nombre: z.string().nullable(),
				createdAt: z.date().nullable(),
				updatedAt: z.date().nullable(),
				usuarioId: z.number().int().nullable(),
				estadoId: z.number().int().nullable(),
			})
			.nullable()
			.optional(),
	}),
);
