import * as z from "zod";
export const AvatarGroupByResultSchema = z.array(
	z.object({
		id: z.number().int(),
		nombre: z.string(),
		url: z.string(),
		_count: z
			.object({
				id: z.number(),
				nombre: z.number(),
				url: z.number(),
				escritores: z.number(),
			})
			.optional(),
		_sum: z
			.object({
				id: z.number().nullable(),
			})
			.nullable()
			.optional(),
		_avg: z
			.object({
				id: z.number().nullable(),
			})
			.nullable()
			.optional(),
		_min: z
			.object({
				id: z.number().int().nullable(),
				nombre: z.string().nullable(),
				url: z.string().nullable(),
			})
			.nullable()
			.optional(),
		_max: z
			.object({
				id: z.number().int().nullable(),
				nombre: z.string().nullable(),
				url: z.string().nullable(),
			})
			.nullable()
			.optional(),
	}),
);
