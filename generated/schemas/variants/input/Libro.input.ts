import * as z from "zod";
// prettier-ignore
export const LibroInputSchema = z
	.object({
		id: z.number().int(),
		titulo: z.string(),
		resumen: z.string(),
		portada: z.string().optional().nullable(),
		publicado: z.boolean(),
		fechaPublicacion: z.date().optional().nullable(),
		createdAt: z.date(),
		updatedAt: z.date(),
		escritorId: z.number().int(),
		escritor: z.unknown(),
		tipoId: z.number().int(),
		tipo: z.unknown(),
		estadoId: z.number().int(),
		estado: z.unknown(),
		idiomaId: z.number().int(),
		idioma: z.unknown(),
		capitulos: z.array(z.unknown()),
		categorias: z.array(z.unknown()),
		etiquetas: z.array(z.unknown()),
		favoritos: z.array(z.unknown()),
		glosarios: z.array(z.unknown()),
		listaLibros: z.array(z.unknown()),
	})
	.strict();

export type LibroInputType = z.infer<typeof LibroInputSchema>;
