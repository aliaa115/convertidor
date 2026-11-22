import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { CapituloOrderByRelationAggregateInputObjectSchema as CapituloOrderByRelationAggregateInputObjectSchema } from "./CapituloOrderByRelationAggregateInput.schema.ts";
import { CategoriaOrderByRelationAggregateInputObjectSchema as CategoriaOrderByRelationAggregateInputObjectSchema } from "./CategoriaOrderByRelationAggregateInput.schema.ts";
import { ComentarioOrderByRelationAggregateInputObjectSchema as ComentarioOrderByRelationAggregateInputObjectSchema } from "./ComentarioOrderByRelationAggregateInput.schema.ts";
import { ConfiguracionOrderByRelationAggregateInputObjectSchema as ConfiguracionOrderByRelationAggregateInputObjectSchema } from "./ConfiguracionOrderByRelationAggregateInput.schema.ts";
import { EscritorOrderByRelationAggregateInputObjectSchema as EscritorOrderByRelationAggregateInputObjectSchema } from "./EscritorOrderByRelationAggregateInput.schema.ts";
import { EtiquetaOrderByRelationAggregateInputObjectSchema as EtiquetaOrderByRelationAggregateInputObjectSchema } from "./EtiquetaOrderByRelationAggregateInput.schema.ts";
import { FavoritoOrderByRelationAggregateInputObjectSchema as FavoritoOrderByRelationAggregateInputObjectSchema } from "./FavoritoOrderByRelationAggregateInput.schema.ts";
import { GlosarioOrderByRelationAggregateInputObjectSchema as GlosarioOrderByRelationAggregateInputObjectSchema } from "./GlosarioOrderByRelationAggregateInput.schema.ts";
import { IdiomaOrderByRelationAggregateInputObjectSchema as IdiomaOrderByRelationAggregateInputObjectSchema } from "./IdiomaOrderByRelationAggregateInput.schema.ts";
import { LibroCategoriaOrderByRelationAggregateInputObjectSchema as LibroCategoriaOrderByRelationAggregateInputObjectSchema } from "./LibroCategoriaOrderByRelationAggregateInput.schema.ts";
import { LibroEtiquetaOrderByRelationAggregateInputObjectSchema as LibroEtiquetaOrderByRelationAggregateInputObjectSchema } from "./LibroEtiquetaOrderByRelationAggregateInput.schema.ts";
import { LibroOrderByRelationAggregateInputObjectSchema as LibroOrderByRelationAggregateInputObjectSchema } from "./LibroOrderByRelationAggregateInput.schema.ts";
import { ListaLibroOrderByRelationAggregateInputObjectSchema as ListaLibroOrderByRelationAggregateInputObjectSchema } from "./ListaLibroOrderByRelationAggregateInput.schema.ts";
import { ListaOrderByRelationAggregateInputObjectSchema as ListaOrderByRelationAggregateInputObjectSchema } from "./ListaOrderByRelationAggregateInput.schema.ts";
import { MarcadorOrderByRelationAggregateInputObjectSchema as MarcadorOrderByRelationAggregateInputObjectSchema } from "./MarcadorOrderByRelationAggregateInput.schema.ts";
import { NotaAutorOrderByRelationAggregateInputObjectSchema as NotaAutorOrderByRelationAggregateInputObjectSchema } from "./NotaAutorOrderByRelationAggregateInput.schema.ts";
import { ParrafoOrderByRelationAggregateInputObjectSchema as ParrafoOrderByRelationAggregateInputObjectSchema } from "./ParrafoOrderByRelationAggregateInput.schema.ts";
import { SeguirUsuarioOrderByRelationAggregateInputObjectSchema as SeguirUsuarioOrderByRelationAggregateInputObjectSchema } from "./SeguirUsuarioOrderByRelationAggregateInput.schema.ts";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema.ts";
import { TipoOrderByRelationAggregateInputObjectSchema as TipoOrderByRelationAggregateInputObjectSchema } from "./TipoOrderByRelationAggregateInput.schema.ts";
import { UsuarioOrderByRelationAggregateInputObjectSchema as UsuarioOrderByRelationAggregateInputObjectSchema } from "./UsuarioOrderByRelationAggregateInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			nombre: SortOrderSchema.optional(),
			color: z
				.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
				.optional(),
			icon: z
				.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
				.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			categorias: z
				.lazy(() => CategoriaOrderByRelationAggregateInputObjectSchema)
				.optional(),
			etiquetas: z
				.lazy(() => EtiquetaOrderByRelationAggregateInputObjectSchema)
				.optional(),
			tipos: z
				.lazy(() => TipoOrderByRelationAggregateInputObjectSchema)
				.optional(),
			usuarios: z
				.lazy(() => UsuarioOrderByRelationAggregateInputObjectSchema)
				.optional(),
			escritores: z
				.lazy(() => EscritorOrderByRelationAggregateInputObjectSchema)
				.optional(),
			configuraciones: z
				.lazy(() => ConfiguracionOrderByRelationAggregateInputObjectSchema)
				.optional(),
			idioma: z
				.lazy(() => IdiomaOrderByRelationAggregateInputObjectSchema)
				.optional(),
			libros: z
				.lazy(() => LibroOrderByRelationAggregateInputObjectSchema)
				.optional(),
			capitulos: z
				.lazy(() => CapituloOrderByRelationAggregateInputObjectSchema)
				.optional(),
			parrafos: z
				.lazy(() => ParrafoOrderByRelationAggregateInputObjectSchema)
				.optional(),
			comentarios: z
				.lazy(() => ComentarioOrderByRelationAggregateInputObjectSchema)
				.optional(),
			libroCategorias: z
				.lazy(() => LibroCategoriaOrderByRelationAggregateInputObjectSchema)
				.optional(),
			libroEtiquetas: z
				.lazy(() => LibroEtiquetaOrderByRelationAggregateInputObjectSchema)
				.optional(),
			favoritos: z
				.lazy(() => FavoritoOrderByRelationAggregateInputObjectSchema)
				.optional(),
			glosarios: z
				.lazy(() => GlosarioOrderByRelationAggregateInputObjectSchema)
				.optional(),
			notasAutor: z
				.lazy(() => NotaAutorOrderByRelationAggregateInputObjectSchema)
				.optional(),
			marcadores: z
				.lazy(() => MarcadorOrderByRelationAggregateInputObjectSchema)
				.optional(),
			listas: z
				.lazy(() => ListaOrderByRelationAggregateInputObjectSchema)
				.optional(),
			listaLibros: z
				.lazy(() => ListaLibroOrderByRelationAggregateInputObjectSchema)
				.optional(),
			seguirUsuarios: z
				.lazy(() => SeguirUsuarioOrderByRelationAggregateInputObjectSchema)
				.optional(),
		})
		.strict();
export const EstadoOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.EstadoOrderByWithRelationInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoOrderByWithRelationInput>;
export const EstadoOrderByWithRelationInputObjectZodSchema = makeSchema();
