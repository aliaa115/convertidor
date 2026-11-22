import * as z from "zod";
// prettier-ignore
export const EstadoInputSchema = z
	.object({
		id: z.number().int(),
		nombre: z.string(),
		color: z.string().optional().nullable(),
		icon: z.string().optional().nullable(),
		createdAt: z.date(),
		updatedAt: z.date(),
		categorias: z.array(z.unknown()),
		etiquetas: z.array(z.unknown()),
		tipos: z.array(z.unknown()),
		usuarios: z.array(z.unknown()),
		escritores: z.array(z.unknown()),
		configuraciones: z.array(z.unknown()),
		idioma: z.array(z.unknown()),
		libros: z.array(z.unknown()),
		capitulos: z.array(z.unknown()),
		parrafos: z.array(z.unknown()),
		comentarios: z.array(z.unknown()),
		libroCategorias: z.array(z.unknown()),
		libroEtiquetas: z.array(z.unknown()),
		favoritos: z.array(z.unknown()),
		glosarios: z.array(z.unknown()),
		notasAutor: z.array(z.unknown()),
		marcadores: z.array(z.unknown()),
		listas: z.array(z.unknown()),
		listaLibros: z.array(z.unknown()),
		seguirUsuarios: z.array(z.unknown()),
	})
	.strict();

export type EstadoInputType = z.infer<typeof EstadoInputSchema>;
