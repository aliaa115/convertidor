import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CapituloCreateNestedManyWithoutLibroInputObjectSchema as CapituloCreateNestedManyWithoutLibroInputObjectSchema } from "./CapituloCreateNestedManyWithoutLibroInput.schema.ts";
import { EscritorCreateNestedOneWithoutLibrosInputObjectSchema as EscritorCreateNestedOneWithoutLibrosInputObjectSchema } from "./EscritorCreateNestedOneWithoutLibrosInput.schema.ts";
import { EstadoCreateNestedOneWithoutLibrosInputObjectSchema as EstadoCreateNestedOneWithoutLibrosInputObjectSchema } from "./EstadoCreateNestedOneWithoutLibrosInput.schema.ts";
import { GlosarioCreateNestedManyWithoutLibroInputObjectSchema as GlosarioCreateNestedManyWithoutLibroInputObjectSchema } from "./GlosarioCreateNestedManyWithoutLibroInput.schema.ts";
import { IdiomaCreateNestedOneWithoutLibrosInputObjectSchema as IdiomaCreateNestedOneWithoutLibrosInputObjectSchema } from "./IdiomaCreateNestedOneWithoutLibrosInput.schema.ts";
import { LibroCategoriaCreateNestedManyWithoutLibroInputObjectSchema as LibroCategoriaCreateNestedManyWithoutLibroInputObjectSchema } from "./LibroCategoriaCreateNestedManyWithoutLibroInput.schema.ts";
import { LibroEtiquetaCreateNestedManyWithoutLibroInputObjectSchema as LibroEtiquetaCreateNestedManyWithoutLibroInputObjectSchema } from "./LibroEtiquetaCreateNestedManyWithoutLibroInput.schema.ts";
import { ListaLibroCreateNestedManyWithoutLibroInputObjectSchema as ListaLibroCreateNestedManyWithoutLibroInputObjectSchema } from "./ListaLibroCreateNestedManyWithoutLibroInput.schema.ts";
import { TipoCreateNestedOneWithoutLibrosInputObjectSchema as TipoCreateNestedOneWithoutLibrosInputObjectSchema } from "./TipoCreateNestedOneWithoutLibrosInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			titulo: z.string(),
			resumen: z.string(),
			portada: z.string().optional().nullable(),
			publicado: z.boolean().optional(),
			fechaPublicacion: z.coerce.date().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			escritor: z.lazy(
				() => EscritorCreateNestedOneWithoutLibrosInputObjectSchema,
			),
			tipo: z.lazy(() => TipoCreateNestedOneWithoutLibrosInputObjectSchema),
			estado: z
				.lazy(() => EstadoCreateNestedOneWithoutLibrosInputObjectSchema)
				.optional(),
			idioma: z
				.lazy(() => IdiomaCreateNestedOneWithoutLibrosInputObjectSchema)
				.optional(),
			capitulos: z
				.lazy(() => CapituloCreateNestedManyWithoutLibroInputObjectSchema)
				.optional(),
			categorias: z
				.lazy(() => LibroCategoriaCreateNestedManyWithoutLibroInputObjectSchema)
				.optional(),
			etiquetas: z
				.lazy(() => LibroEtiquetaCreateNestedManyWithoutLibroInputObjectSchema)
				.optional(),
			glosarios: z
				.lazy(() => GlosarioCreateNestedManyWithoutLibroInputObjectSchema)
				.optional(),
			listaLibros: z
				.lazy(() => ListaLibroCreateNestedManyWithoutLibroInputObjectSchema)
				.optional(),
		})
		.strict();
export const LibroCreateWithoutFavoritosInputObjectSchema: z.ZodType<Prisma.LibroCreateWithoutFavoritosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCreateWithoutFavoritosInput>;
export const LibroCreateWithoutFavoritosInputObjectZodSchema = makeSchema();
