import * as z from "zod";
export const LibroAggregateResultSchema = z.object({
	_count: z
		.object({
			id: z.number(),
			titulo: z.number(),
			resumen: z.number(),
			portada: z.number(),
			publicado: z.number(),
			fechaPublicacion: z.number(),
			createdAt: z.number(),
			updatedAt: z.number(),
			escritorId: z.number(),
			escritor: z.number(),
			tipoId: z.number(),
			tipo: z.number(),
			estadoId: z.number(),
			estado: z.number(),
			idiomaId: z.number(),
			idioma: z.number(),
			capitulos: z.number(),
			categorias: z.number(),
			etiquetas: z.number(),
			favoritos: z.number(),
			glosarios: z.number(),
			listaLibros: z.number(),
		})
		.optional(),
	_sum: z
		.object({
			id: z.number().nullable(),
			escritorId: z.number().nullable(),
			tipoId: z.number().nullable(),
			estadoId: z.number().nullable(),
			idiomaId: z.number().nullable(),
		})
		.nullable()
		.optional(),
	_avg: z
		.object({
			id: z.number().nullable(),
			escritorId: z.number().nullable(),
			tipoId: z.number().nullable(),
			estadoId: z.number().nullable(),
			idiomaId: z.number().nullable(),
		})
		.nullable()
		.optional(),
	_min: z
		.object({
			id: z.number().int().nullable(),
			titulo: z.string().nullable(),
			resumen: z.string().nullable(),
			portada: z.string().nullable(),
			fechaPublicacion: z.date().nullable(),
			createdAt: z.date().nullable(),
			updatedAt: z.date().nullable(),
			escritorId: z.number().int().nullable(),
			tipoId: z.number().int().nullable(),
			estadoId: z.number().int().nullable(),
			idiomaId: z.number().int().nullable(),
		})
		.nullable()
		.optional(),
	_max: z
		.object({
			id: z.number().int().nullable(),
			titulo: z.string().nullable(),
			resumen: z.string().nullable(),
			portada: z.string().nullable(),
			fechaPublicacion: z.date().nullable(),
			createdAt: z.date().nullable(),
			updatedAt: z.date().nullable(),
			escritorId: z.number().int().nullable(),
			tipoId: z.number().int().nullable(),
			estadoId: z.number().int().nullable(),
			idiomaId: z.number().int().nullable(),
		})
		.nullable()
		.optional(),
});
