import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { TipoScalarFieldEnumSchema } from "./enums/TipoScalarFieldEnum.schema.ts";
import { ComentarioFindManySchema } from "./findManyComentario.schema.ts";
import { ConfiguracionFindManySchema } from "./findManyConfiguracion.schema.ts";
import { LibroFindManySchema } from "./findManyLibro.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./objects/EstadoArgs.schema.ts";
import { TipoCountOutputTypeArgsObjectSchema as TipoCountOutputTypeArgsObjectSchema } from "./objects/TipoCountOutputTypeArgs.schema.ts";
import { TipoIncludeObjectSchema as TipoIncludeObjectSchema } from "./objects/TipoInclude.schema.ts";
import { TipoOrderByWithRelationInputObjectSchema as TipoOrderByWithRelationInputObjectSchema } from "./objects/TipoOrderByWithRelationInput.schema.ts";
import { TipoWhereInputObjectSchema as TipoWhereInputObjectSchema } from "./objects/TipoWhereInput.schema.ts";
import { TipoWhereUniqueInputObjectSchema as TipoWhereUniqueInputObjectSchema } from "./objects/TipoWhereUniqueInput.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TipoFindFirstSelectSchema: z.ZodType<Prisma.TipoSelect> = z
	.object({
		id: z.boolean().optional(),
		nombre: z.boolean().optional(),
		tabla: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
		configuraciones: z.union([z.boolean(), z.lazy(() => ConfiguracionFindManySchema)]).optional(),
		libros: z.union([z.boolean(), z.lazy(() => LibroFindManySchema)]).optional(),
		comentarios: z.union([z.boolean(), z.lazy(() => ComentarioFindManySchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => TipoCountOutputTypeArgsObjectSchema)]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.TipoSelect>;

export const TipoFindFirstSelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		nombre: z.boolean().optional(),
		tabla: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
		configuraciones: z.union([z.boolean(), z.lazy(() => ConfiguracionFindManySchema)]).optional(),
		libros: z.union([z.boolean(), z.lazy(() => LibroFindManySchema)]).optional(),
		comentarios: z.union([z.boolean(), z.lazy(() => ComentarioFindManySchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => TipoCountOutputTypeArgsObjectSchema)]).optional(),
	})
	.strict();

export const TipoFindFirstSchema: z.ZodType<Prisma.TipoFindFirstArgs> = z
	.object({
		select: TipoFindFirstSelectSchema.optional(),
		include: z.lazy(() => TipoIncludeObjectSchema.optional()),
		orderBy: z.union([TipoOrderByWithRelationInputObjectSchema, TipoOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: TipoWhereInputObjectSchema.optional(),
		cursor: TipoWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([TipoScalarFieldEnumSchema, TipoScalarFieldEnumSchema.array()]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.TipoFindFirstArgs>;

export const TipoFindFirstZodSchema = z
	.object({
		select: TipoFindFirstSelectSchema.optional(),
		include: z.lazy(() => TipoIncludeObjectSchema.optional()),
		orderBy: z.union([TipoOrderByWithRelationInputObjectSchema, TipoOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: TipoWhereInputObjectSchema.optional(),
		cursor: TipoWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([TipoScalarFieldEnumSchema, TipoScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();
