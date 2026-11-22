import * as z from "zod";
export const SeguirUsuarioGroupByResultSchema = z.array(
	z.object({
		id: z.number().int(),
		createdAt: z.date(),
		updatedAt: z.date(),
		escritorId: z.number().int(),
		escritorSeguidoId: z.number().int(),
		estadoId: z.number().int(),
		_count: z
			.object({
				id: z.number(),
				createdAt: z.number(),
				updatedAt: z.number(),
				escritorId: z.number(),
				escritor: z.number(),
				escritorSeguidoId: z.number(),
				seguido: z.number(),
				estadoId: z.number(),
				estado: z.number(),
			})
			.optional(),
		_sum: z
			.object({
				id: z.number().nullable(),
				escritorId: z.number().nullable(),
				escritorSeguidoId: z.number().nullable(),
				estadoId: z.number().nullable(),
			})
			.nullable()
			.optional(),
		_avg: z
			.object({
				id: z.number().nullable(),
				escritorId: z.number().nullable(),
				escritorSeguidoId: z.number().nullable(),
				estadoId: z.number().nullable(),
			})
			.nullable()
			.optional(),
		_min: z
			.object({
				id: z.number().int().nullable(),
				createdAt: z.date().nullable(),
				updatedAt: z.date().nullable(),
				escritorId: z.number().int().nullable(),
				escritorSeguidoId: z.number().int().nullable(),
				estadoId: z.number().int().nullable(),
			})
			.nullable()
			.optional(),
		_max: z
			.object({
				id: z.number().int().nullable(),
				createdAt: z.date().nullable(),
				updatedAt: z.date().nullable(),
				escritorId: z.number().int().nullable(),
				escritorSeguidoId: z.number().int().nullable(),
				estadoId: z.number().int().nullable(),
			})
			.nullable()
			.optional(),
	}),
);
