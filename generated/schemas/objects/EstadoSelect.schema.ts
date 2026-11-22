import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CapituloFindManySchema as CapituloFindManySchema } from "../findManyCapitulo.schema.ts";
import { CategoriaFindManySchema as CategoriaFindManySchema } from "../findManyCategoria.schema.ts";
import { ComentarioFindManySchema as ComentarioFindManySchema } from "../findManyComentario.schema.ts";
import { ConfiguracionFindManySchema as ConfiguracionFindManySchema } from "../findManyConfiguracion.schema.ts";
import { EscritorFindManySchema as EscritorFindManySchema } from "../findManyEscritor.schema.ts";
import { EtiquetaFindManySchema as EtiquetaFindManySchema } from "../findManyEtiqueta.schema.ts";
import { FavoritoFindManySchema as FavoritoFindManySchema } from "../findManyFavorito.schema.ts";
import { GlosarioFindManySchema as GlosarioFindManySchema } from "../findManyGlosario.schema.ts";
import { IdiomaFindManySchema as IdiomaFindManySchema } from "../findManyIdioma.schema.ts";
import { LibroFindManySchema as LibroFindManySchema } from "../findManyLibro.schema.ts";
import { LibroCategoriaFindManySchema as LibroCategoriaFindManySchema } from "../findManyLibroCategoria.schema.ts";
import { LibroEtiquetaFindManySchema as LibroEtiquetaFindManySchema } from "../findManyLibroEtiqueta.schema.ts";
import { ListaFindManySchema as ListaFindManySchema } from "../findManyLista.schema.ts";
import { ListaLibroFindManySchema as ListaLibroFindManySchema } from "../findManyListaLibro.schema.ts";
import { MarcadorFindManySchema as MarcadorFindManySchema } from "../findManyMarcador.schema.ts";
import { NotaAutorFindManySchema as NotaAutorFindManySchema } from "../findManyNotaAutor.schema.ts";
import { ParrafoFindManySchema as ParrafoFindManySchema } from "../findManyParrafo.schema.ts";
import { SeguirUsuarioFindManySchema as SeguirUsuarioFindManySchema } from "../findManySeguirUsuario.schema.ts";
import { TipoFindManySchema as TipoFindManySchema } from "../findManyTipo.schema.ts";
import { UsuarioFindManySchema as UsuarioFindManySchema } from "../findManyUsuario.schema.ts";
import { EstadoCountOutputTypeArgsObjectSchema as EstadoCountOutputTypeArgsObjectSchema } from "./EstadoCountOutputTypeArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.boolean().optional(),
			nombre: z.boolean().optional(),
			color: z.boolean().optional(),
			icon: z.boolean().optional(),
			createdAt: z.boolean().optional(),
			updatedAt: z.boolean().optional(),
			categorias: z
				.union([z.boolean(), z.lazy(() => CategoriaFindManySchema)])
				.optional(),
			etiquetas: z
				.union([z.boolean(), z.lazy(() => EtiquetaFindManySchema)])
				.optional(),
			tipos: z
				.union([z.boolean(), z.lazy(() => TipoFindManySchema)])
				.optional(),
			usuarios: z
				.union([z.boolean(), z.lazy(() => UsuarioFindManySchema)])
				.optional(),
			escritores: z
				.union([z.boolean(), z.lazy(() => EscritorFindManySchema)])
				.optional(),
			configuraciones: z
				.union([z.boolean(), z.lazy(() => ConfiguracionFindManySchema)])
				.optional(),
			idioma: z
				.union([z.boolean(), z.lazy(() => IdiomaFindManySchema)])
				.optional(),
			libros: z
				.union([z.boolean(), z.lazy(() => LibroFindManySchema)])
				.optional(),
			capitulos: z
				.union([z.boolean(), z.lazy(() => CapituloFindManySchema)])
				.optional(),
			parrafos: z
				.union([z.boolean(), z.lazy(() => ParrafoFindManySchema)])
				.optional(),
			comentarios: z
				.union([z.boolean(), z.lazy(() => ComentarioFindManySchema)])
				.optional(),
			libroCategorias: z
				.union([z.boolean(), z.lazy(() => LibroCategoriaFindManySchema)])
				.optional(),
			libroEtiquetas: z
				.union([z.boolean(), z.lazy(() => LibroEtiquetaFindManySchema)])
				.optional(),
			favoritos: z
				.union([z.boolean(), z.lazy(() => FavoritoFindManySchema)])
				.optional(),
			glosarios: z
				.union([z.boolean(), z.lazy(() => GlosarioFindManySchema)])
				.optional(),
			notasAutor: z
				.union([z.boolean(), z.lazy(() => NotaAutorFindManySchema)])
				.optional(),
			marcadores: z
				.union([z.boolean(), z.lazy(() => MarcadorFindManySchema)])
				.optional(),
			listas: z
				.union([z.boolean(), z.lazy(() => ListaFindManySchema)])
				.optional(),
			listaLibros: z
				.union([z.boolean(), z.lazy(() => ListaLibroFindManySchema)])
				.optional(),
			seguirUsuarios: z
				.union([z.boolean(), z.lazy(() => SeguirUsuarioFindManySchema)])
				.optional(),
			_count: z
				.union([
					z.boolean(),
					z.lazy(() => EstadoCountOutputTypeArgsObjectSchema),
				])
				.optional(),
		})
		.strict();
export const EstadoSelectObjectSchema: z.ZodType<Prisma.EstadoSelect> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoSelect>;
export const EstadoSelectObjectZodSchema = makeSchema();
