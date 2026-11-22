import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CapituloFindManySchema as CapituloFindManySchema } from "../findManyCapitulo.schema.ts";
import { FavoritoFindManySchema as FavoritoFindManySchema } from "../findManyFavorito.schema.ts";
import { GlosarioFindManySchema as GlosarioFindManySchema } from "../findManyGlosario.schema.ts";
import { LibroCategoriaFindManySchema as LibroCategoriaFindManySchema } from "../findManyLibroCategoria.schema.ts";
import { LibroEtiquetaFindManySchema as LibroEtiquetaFindManySchema } from "../findManyLibroEtiqueta.schema.ts";
import { ListaLibroFindManySchema as ListaLibroFindManySchema } from "../findManyListaLibro.schema.ts";
import { EscritorArgsObjectSchema as EscritorArgsObjectSchema } from "./EscritorArgs.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./EstadoArgs.schema.ts";
import { IdiomaArgsObjectSchema as IdiomaArgsObjectSchema } from "./IdiomaArgs.schema.ts";
import { LibroCountOutputTypeArgsObjectSchema as LibroCountOutputTypeArgsObjectSchema } from "./LibroCountOutputTypeArgs.schema.ts";
import { TipoArgsObjectSchema as TipoArgsObjectSchema } from "./TipoArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			escritor: z
				.union([z.boolean(), z.lazy(() => EscritorArgsObjectSchema)])
				.optional(),
			tipo: z
				.union([z.boolean(), z.lazy(() => TipoArgsObjectSchema)])
				.optional(),
			estado: z
				.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)])
				.optional(),
			idioma: z
				.union([z.boolean(), z.lazy(() => IdiomaArgsObjectSchema)])
				.optional(),
			capitulos: z
				.union([z.boolean(), z.lazy(() => CapituloFindManySchema)])
				.optional(),
			categorias: z
				.union([z.boolean(), z.lazy(() => LibroCategoriaFindManySchema)])
				.optional(),
			etiquetas: z
				.union([z.boolean(), z.lazy(() => LibroEtiquetaFindManySchema)])
				.optional(),
			favoritos: z
				.union([z.boolean(), z.lazy(() => FavoritoFindManySchema)])
				.optional(),
			glosarios: z
				.union([z.boolean(), z.lazy(() => GlosarioFindManySchema)])
				.optional(),
			listaLibros: z
				.union([z.boolean(), z.lazy(() => ListaLibroFindManySchema)])
				.optional(),
			_count: z
				.union([
					z.boolean(),
					z.lazy(() => LibroCountOutputTypeArgsObjectSchema),
				])
				.optional(),
		})
		.strict();
export const LibroIncludeObjectSchema: z.ZodType<Prisma.LibroInclude> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroInclude>;
export const LibroIncludeObjectZodSchema = makeSchema();
