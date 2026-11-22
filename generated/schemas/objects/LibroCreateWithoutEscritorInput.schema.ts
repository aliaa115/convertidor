import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { CapituloCreateNestedManyWithoutLibroInputObjectSchema as CapituloCreateNestedManyWithoutLibroInputObjectSchema } from "./CapituloCreateNestedManyWithoutLibroInput.schema.ts";
import { EstadoCreateNestedOneWithoutLibrosInputObjectSchema as EstadoCreateNestedOneWithoutLibrosInputObjectSchema } from "./EstadoCreateNestedOneWithoutLibrosInput.schema.ts";
import { FavoritoCreateNestedManyWithoutLibroInputObjectSchema as FavoritoCreateNestedManyWithoutLibroInputObjectSchema } from "./FavoritoCreateNestedManyWithoutLibroInput.schema.ts";
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
			tipo: z.lazy(() => TipoCreateNestedOneWithoutLibrosInputObjectSchema),
			estado: z.lazy(() => EstadoCreateNestedOneWithoutLibrosInputObjectSchema).optional(),
			idioma: z.lazy(() => IdiomaCreateNestedOneWithoutLibrosInputObjectSchema).optional(),
			capitulos: z.lazy(() => CapituloCreateNestedManyWithoutLibroInputObjectSchema).optional(),
			categorias: z.lazy(() => LibroCategoriaCreateNestedManyWithoutLibroInputObjectSchema).optional(),
			etiquetas: z.lazy(() => LibroEtiquetaCreateNestedManyWithoutLibroInputObjectSchema).optional(),
			favoritos: z.lazy(() => FavoritoCreateNestedManyWithoutLibroInputObjectSchema).optional(),
			glosarios: z.lazy(() => GlosarioCreateNestedManyWithoutLibroInputObjectSchema).optional(),
			listaLibros: z.lazy(() => ListaLibroCreateNestedManyWithoutLibroInputObjectSchema).optional(),
		})
		.strict();
export const LibroCreateWithoutEscritorInputObjectSchema: z.ZodType<Prisma.LibroCreateWithoutEscritorInput> = makeSchema() as unknown as z.ZodType<Prisma.LibroCreateWithoutEscritorInput>;
export const LibroCreateWithoutEscritorInputObjectZodSchema = makeSchema();
