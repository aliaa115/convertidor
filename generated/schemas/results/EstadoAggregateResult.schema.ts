import * as z from "zod";
export const EstadoAggregateResultSchema = z.object({
	_count: z
		.object({
			id: z.number(),
			nombre: z.number(),
			color: z.number(),
			icon: z.number(),
			createdAt: z.number(),
			updatedAt: z.number(),
			categorias: z.number(),
			etiquetas: z.number(),
			tipos: z.number(),
			usuarios: z.number(),
			escritores: z.number(),
			configuraciones: z.number(),
			idioma: z.number(),
			libros: z.number(),
			capitulos: z.number(),
			parrafos: z.number(),
			comentarios: z.number(),
			libroCategorias: z.number(),
			libroEtiquetas: z.number(),
			favoritos: z.number(),
			glosarios: z.number(),
			notasAutor: z.number(),
			marcadores: z.number(),
			listas: z.number(),
			listaLibros: z.number(),
			seguirUsuarios: z.number(),
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
			color: z.string().nullable(),
			icon: z.string().nullable(),
			createdAt: z.date().nullable(),
			updatedAt: z.date().nullable(),
		})
		.nullable()
		.optional(),
	_max: z
		.object({
			id: z.number().int().nullable(),
			nombre: z.string().nullable(),
			color: z.string().nullable(),
			icon: z.string().nullable(),
			createdAt: z.date().nullable(),
			updatedAt: z.date().nullable(),
		})
		.nullable()
		.optional(),
});
