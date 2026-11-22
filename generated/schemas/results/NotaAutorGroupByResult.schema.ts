import * as z from "zod";
export const NotaAutorGroupByResultSchema = z.array(
	z.object({
		id: z.number().int(),
		texto: z.string(),
		createdAt: z.date(),
		updatedAt: z.date(),
		escritorId: z.number().int(),
		capituloId: z.number().int(),
		estadoId: z.number().int(),
		_count: z
			.object({
				id: z.number(),
				texto: z.number(),
				createdAt: z.number(),
				updatedAt: z.number(),
				escritorId: z.number(),
				escritor: z.number(),
				capituloId: z.number(),
				capitulo: z.number(),
				estadoId: z.number(),
				estado: z.number(),
			})
			.optional(),
		_sum: z
			.object({
				id: z.number().nullable(),
				escritorId: z.number().nullable(),
				capituloId: z.number().nullable(),
				estadoId: z.number().nullable(),
			})
			.nullable()
			.optional(),
		_avg: z
			.object({
				id: z.number().nullable(),
				escritorId: z.number().nullable(),
				capituloId: z.number().nullable(),
				estadoId: z.number().nullable(),
			})
			.nullable()
			.optional(),
		_min: z
			.object({
				id: z.number().int().nullable(),
				texto: z.string().nullable(),
				createdAt: z.date().nullable(),
				updatedAt: z.date().nullable(),
				escritorId: z.number().int().nullable(),
				capituloId: z.number().int().nullable(),
				estadoId: z.number().int().nullable(),
			})
			.nullable()
			.optional(),
		_max: z
			.object({
				id: z.number().int().nullable(),
				texto: z.string().nullable(),
				createdAt: z.date().nullable(),
				updatedAt: z.date().nullable(),
				escritorId: z.number().int().nullable(),
				capituloId: z.number().int().nullable(),
				estadoId: z.number().int().nullable(),
			})
			.nullable()
			.optional(),
	}),
);
