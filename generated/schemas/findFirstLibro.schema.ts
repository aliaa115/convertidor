import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { LibroScalarFieldEnumSchema } from "./enums/LibroScalarFieldEnum.schema.ts";
import { CapituloFindManySchema } from "./findManyCapitulo.schema.ts";
import { FavoritoFindManySchema } from "./findManyFavorito.schema.ts";
import { GlosarioFindManySchema } from "./findManyGlosario.schema.ts";
import { LibroCategoriaFindManySchema } from "./findManyLibroCategoria.schema.ts";
import { LibroEtiquetaFindManySchema } from "./findManyLibroEtiqueta.schema.ts";
import { ListaLibroFindManySchema } from "./findManyListaLibro.schema.ts";
import { EscritorArgsObjectSchema as EscritorArgsObjectSchema } from "./objects/EscritorArgs.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./objects/EstadoArgs.schema.ts";
import { IdiomaArgsObjectSchema as IdiomaArgsObjectSchema } from "./objects/IdiomaArgs.schema.ts";
import { LibroCountOutputTypeArgsObjectSchema as LibroCountOutputTypeArgsObjectSchema } from "./objects/LibroCountOutputTypeArgs.schema.ts";
import { LibroIncludeObjectSchema as LibroIncludeObjectSchema } from "./objects/LibroInclude.schema.ts";
import { LibroOrderByWithRelationInputObjectSchema as LibroOrderByWithRelationInputObjectSchema } from "./objects/LibroOrderByWithRelationInput.schema.ts";
import { LibroWhereInputObjectSchema as LibroWhereInputObjectSchema } from "./objects/LibroWhereInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./objects/LibroWhereUniqueInput.schema.ts";
import { TipoArgsObjectSchema as TipoArgsObjectSchema } from "./objects/TipoArgs.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LibroFindFirstSelectSchema: z.ZodType<Prisma.LibroSelect> = z
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
	.strict() as unknown as z.ZodType<Prisma.LibroSelect>;

export const LibroFindFirstSelectZodSchema = z
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

export const LibroFindFirstSchema: z.ZodType<Prisma.LibroFindFirstArgs> = z
	.object({
		select: LibroFindFirstSelectSchema.optional(),
		include: z.lazy(() => LibroIncludeObjectSchema.optional()),
		orderBy: z.union([LibroOrderByWithRelationInputObjectSchema, LibroOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: LibroWhereInputObjectSchema.optional(),
		cursor: LibroWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([LibroScalarFieldEnumSchema, LibroScalarFieldEnumSchema.array()]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.LibroFindFirstArgs>;

export const LibroFindFirstZodSchema = z
	.object({
		select: LibroFindFirstSelectSchema.optional(),
		include: z.lazy(() => LibroIncludeObjectSchema.optional()),
		orderBy: z.union([LibroOrderByWithRelationInputObjectSchema, LibroOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: LibroWhereInputObjectSchema.optional(),
		cursor: LibroWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([LibroScalarFieldEnumSchema, LibroScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();
