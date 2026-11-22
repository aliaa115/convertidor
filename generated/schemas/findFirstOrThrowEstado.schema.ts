import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { EstadoScalarFieldEnumSchema } from "./enums/EstadoScalarFieldEnum.schema.ts";
import { CapituloFindManySchema } from "./findManyCapitulo.schema.ts";
import { CategoriaFindManySchema } from "./findManyCategoria.schema.ts";
import { ComentarioFindManySchema } from "./findManyComentario.schema.ts";
import { ConfiguracionFindManySchema } from "./findManyConfiguracion.schema.ts";
import { EscritorFindManySchema } from "./findManyEscritor.schema.ts";
import { EtiquetaFindManySchema } from "./findManyEtiqueta.schema.ts";
import { FavoritoFindManySchema } from "./findManyFavorito.schema.ts";
import { GlosarioFindManySchema } from "./findManyGlosario.schema.ts";
import { IdiomaFindManySchema } from "./findManyIdioma.schema.ts";
import { LibroFindManySchema } from "./findManyLibro.schema.ts";
import { LibroCategoriaFindManySchema } from "./findManyLibroCategoria.schema.ts";
import { LibroEtiquetaFindManySchema } from "./findManyLibroEtiqueta.schema.ts";
import { ListaFindManySchema } from "./findManyLista.schema.ts";
import { ListaLibroFindManySchema } from "./findManyListaLibro.schema.ts";
import { MarcadorFindManySchema } from "./findManyMarcador.schema.ts";
import { NotaAutorFindManySchema } from "./findManyNotaAutor.schema.ts";
import { ParrafoFindManySchema } from "./findManyParrafo.schema.ts";
import { SeguirUsuarioFindManySchema } from "./findManySeguirUsuario.schema.ts";
import { TipoFindManySchema } from "./findManyTipo.schema.ts";
import { UsuarioFindManySchema } from "./findManyUsuario.schema.ts";
import { EstadoCountOutputTypeArgsObjectSchema as EstadoCountOutputTypeArgsObjectSchema } from "./objects/EstadoCountOutputTypeArgs.schema.ts";
import { EstadoIncludeObjectSchema as EstadoIncludeObjectSchema } from "./objects/EstadoInclude.schema.ts";
import { EstadoOrderByWithRelationInputObjectSchema as EstadoOrderByWithRelationInputObjectSchema } from "./objects/EstadoOrderByWithRelationInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./objects/EstadoWhereInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./objects/EstadoWhereUniqueInput.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EstadoFindFirstOrThrowSelectSchema: z.ZodType<Prisma.EstadoSelect> = z
	.object({
		id: z.boolean().optional(),
		nombre: z.boolean().optional(),
		color: z.boolean().optional(),
		icon: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		categorias: z.union([z.boolean(), z.lazy(() => CategoriaFindManySchema)]).optional(),
		etiquetas: z.union([z.boolean(), z.lazy(() => EtiquetaFindManySchema)]).optional(),
		tipos: z.union([z.boolean(), z.lazy(() => TipoFindManySchema)]).optional(),
		usuarios: z.union([z.boolean(), z.lazy(() => UsuarioFindManySchema)]).optional(),
		escritores: z.union([z.boolean(), z.lazy(() => EscritorFindManySchema)]).optional(),
		configuraciones: z.union([z.boolean(), z.lazy(() => ConfiguracionFindManySchema)]).optional(),
		idioma: z.union([z.boolean(), z.lazy(() => IdiomaFindManySchema)]).optional(),
		libros: z.union([z.boolean(), z.lazy(() => LibroFindManySchema)]).optional(),
		capitulos: z.union([z.boolean(), z.lazy(() => CapituloFindManySchema)]).optional(),
		parrafos: z.union([z.boolean(), z.lazy(() => ParrafoFindManySchema)]).optional(),
		comentarios: z.union([z.boolean(), z.lazy(() => ComentarioFindManySchema)]).optional(),
		libroCategorias: z.union([z.boolean(), z.lazy(() => LibroCategoriaFindManySchema)]).optional(),
		libroEtiquetas: z.union([z.boolean(), z.lazy(() => LibroEtiquetaFindManySchema)]).optional(),
		favoritos: z.union([z.boolean(), z.lazy(() => FavoritoFindManySchema)]).optional(),
		glosarios: z.union([z.boolean(), z.lazy(() => GlosarioFindManySchema)]).optional(),
		notasAutor: z.union([z.boolean(), z.lazy(() => NotaAutorFindManySchema)]).optional(),
		marcadores: z.union([z.boolean(), z.lazy(() => MarcadorFindManySchema)]).optional(),
		listas: z.union([z.boolean(), z.lazy(() => ListaFindManySchema)]).optional(),
		listaLibros: z.union([z.boolean(), z.lazy(() => ListaLibroFindManySchema)]).optional(),
		seguirUsuarios: z.union([z.boolean(), z.lazy(() => SeguirUsuarioFindManySchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => EstadoCountOutputTypeArgsObjectSchema)]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.EstadoSelect>;

export const EstadoFindFirstOrThrowSelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		nombre: z.boolean().optional(),
		color: z.boolean().optional(),
		icon: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		categorias: z.union([z.boolean(), z.lazy(() => CategoriaFindManySchema)]).optional(),
		etiquetas: z.union([z.boolean(), z.lazy(() => EtiquetaFindManySchema)]).optional(),
		tipos: z.union([z.boolean(), z.lazy(() => TipoFindManySchema)]).optional(),
		usuarios: z.union([z.boolean(), z.lazy(() => UsuarioFindManySchema)]).optional(),
		escritores: z.union([z.boolean(), z.lazy(() => EscritorFindManySchema)]).optional(),
		configuraciones: z.union([z.boolean(), z.lazy(() => ConfiguracionFindManySchema)]).optional(),
		idioma: z.union([z.boolean(), z.lazy(() => IdiomaFindManySchema)]).optional(),
		libros: z.union([z.boolean(), z.lazy(() => LibroFindManySchema)]).optional(),
		capitulos: z.union([z.boolean(), z.lazy(() => CapituloFindManySchema)]).optional(),
		parrafos: z.union([z.boolean(), z.lazy(() => ParrafoFindManySchema)]).optional(),
		comentarios: z.union([z.boolean(), z.lazy(() => ComentarioFindManySchema)]).optional(),
		libroCategorias: z.union([z.boolean(), z.lazy(() => LibroCategoriaFindManySchema)]).optional(),
		libroEtiquetas: z.union([z.boolean(), z.lazy(() => LibroEtiquetaFindManySchema)]).optional(),
		favoritos: z.union([z.boolean(), z.lazy(() => FavoritoFindManySchema)]).optional(),
		glosarios: z.union([z.boolean(), z.lazy(() => GlosarioFindManySchema)]).optional(),
		notasAutor: z.union([z.boolean(), z.lazy(() => NotaAutorFindManySchema)]).optional(),
		marcadores: z.union([z.boolean(), z.lazy(() => MarcadorFindManySchema)]).optional(),
		listas: z.union([z.boolean(), z.lazy(() => ListaFindManySchema)]).optional(),
		listaLibros: z.union([z.boolean(), z.lazy(() => ListaLibroFindManySchema)]).optional(),
		seguirUsuarios: z.union([z.boolean(), z.lazy(() => SeguirUsuarioFindManySchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => EstadoCountOutputTypeArgsObjectSchema)]).optional(),
	})
	.strict();

export const EstadoFindFirstOrThrowSchema: z.ZodType<Prisma.EstadoFindFirstOrThrowArgs> = z
	.object({
		select: EstadoFindFirstOrThrowSelectSchema.optional(),
		include: z.lazy(() => EstadoIncludeObjectSchema.optional()),
		orderBy: z.union([EstadoOrderByWithRelationInputObjectSchema, EstadoOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: EstadoWhereInputObjectSchema.optional(),
		cursor: EstadoWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([EstadoScalarFieldEnumSchema, EstadoScalarFieldEnumSchema.array()]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.EstadoFindFirstOrThrowArgs>;

export const EstadoFindFirstOrThrowZodSchema = z
	.object({
		select: EstadoFindFirstOrThrowSelectSchema.optional(),
		include: z.lazy(() => EstadoIncludeObjectSchema.optional()),
		orderBy: z.union([EstadoOrderByWithRelationInputObjectSchema, EstadoOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: EstadoWhereInputObjectSchema.optional(),
		cursor: EstadoWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([EstadoScalarFieldEnumSchema, EstadoScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();
