import * as z from "zod";
export const EscritorAggregateResultSchema = z.object({
	_count: z
		.object({
			id: z.number(),
			nombres: z.number(),
			apellidos: z.number(),
			alias: z.number(),
			descripcion: z.number(),
			fechaNacimiento: z.number(),
			createdAt: z.number(),
			updatedAt: z.number(),
			usuarioId: z.number(),
			usuario: z.number(),
			avatarId: z.number(),
			avatar: z.number(),
			estadoId: z.number(),
			estado: z.number(),
			libros: z.number(),
			comentarios: z.number(),
			favoritos: z.number(),
			glosarios: z.number(),
			notasAutor: z.number(),
			marcadores: z.number(),
			seguidores: z.number(),
			siguiendo: z.number(),
		})
		.optional(),
	_sum: z
		.object({
			id: z.number().nullable(),
			usuarioId: z.number().nullable(),
			avatarId: z.number().nullable(),
			estadoId: z.number().nullable(),
		})
		.nullable()
		.optional(),
	_avg: z
		.object({
			id: z.number().nullable(),
			usuarioId: z.number().nullable(),
			avatarId: z.number().nullable(),
			estadoId: z.number().nullable(),
		})
		.nullable()
		.optional(),
	_min: z
		.object({
			id: z.number().int().nullable(),
			nombres: z.string().nullable(),
			apellidos: z.string().nullable(),
			alias: z.string().nullable(),
			descripcion: z.string().nullable(),
			fechaNacimiento: z.date().nullable(),
			createdAt: z.date().nullable(),
			updatedAt: z.date().nullable(),
			usuarioId: z.number().int().nullable(),
			avatarId: z.number().int().nullable(),
			estadoId: z.number().int().nullable(),
		})
		.nullable()
		.optional(),
	_max: z
		.object({
			id: z.number().int().nullable(),
			nombres: z.string().nullable(),
			apellidos: z.string().nullable(),
			alias: z.string().nullable(),
			descripcion: z.string().nullable(),
			fechaNacimiento: z.date().nullable(),
			createdAt: z.date().nullable(),
			updatedAt: z.date().nullable(),
			usuarioId: z.number().int().nullable(),
			avatarId: z.number().int().nullable(),
			estadoId: z.number().int().nullable(),
		})
		.nullable()
		.optional(),
});
