import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
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
			id: z.boolean().optional(),
			titulo: z.boolean().optional(),
			resumen: z.boolean().optional(),
			portada: z.boolean().optional(),
			publicado: z.boolean().optional(),
			fechaPublicacion: z.boolean().optional(),
			createdAt: z.boolean().optional(),
			updatedAt: z.boolean().optional(),
			escritorId: z.boolean().optional(),
			escritor: z.union([z.boolean(), z.lazy(() => EscritorArgsObjectSchema)]).optional(),
			tipoId: z.boolean().optional(),
			tipo: z.union([z.boolean(), z.lazy(() => TipoArgsObjectSchema)]).optional(),
			estadoId: z.boolean().optional(),
			estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
			idiomaId: z.boolean().optional(),
			idioma: z.union([z.boolean(), z.lazy(() => IdiomaArgsObjectSchema)]).optional(),
			capitulos: z.union([z.boolean(), z.lazy(() => CapituloFindManySchema)]).optional(),
			categorias: z.union([z.boolean(), z.lazy(() => LibroCategoriaFindManySchema)]).optional(),
			etiquetas: z.union([z.boolean(), z.lazy(() => LibroEtiquetaFindManySchema)]).optional(),
			favoritos: z.union([z.boolean(), z.lazy(() => FavoritoFindManySchema)]).optional(),
			glosarios: z.union([z.boolean(), z.lazy(() => GlosarioFindManySchema)]).optional(),
			listaLibros: z.union([z.boolean(), z.lazy(() => ListaLibroFindManySchema)]).optional(),
			_count: z.union([z.boolean(), z.lazy(() => LibroCountOutputTypeArgsObjectSchema)]).optional(),
		})
		.strict();
export const LibroSelectObjectSchema: z.ZodType<Prisma.LibroSelect> = makeSchema() as unknown as z.ZodType<Prisma.LibroSelect>;
export const LibroSelectObjectZodSchema = makeSchema();
