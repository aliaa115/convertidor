import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { LibroEtiquetaScalarFieldEnumSchema } from "./enums/LibroEtiquetaScalarFieldEnum.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./objects/EstadoArgs.schema.ts";
import { EtiquetaArgsObjectSchema as EtiquetaArgsObjectSchema } from "./objects/EtiquetaArgs.schema.ts";
import { LibroArgsObjectSchema as LibroArgsObjectSchema } from "./objects/LibroArgs.schema.ts";
import { LibroEtiquetaIncludeObjectSchema as LibroEtiquetaIncludeObjectSchema } from "./objects/LibroEtiquetaInclude.schema.ts";
import { LibroEtiquetaOrderByWithRelationInputObjectSchema as LibroEtiquetaOrderByWithRelationInputObjectSchema } from "./objects/LibroEtiquetaOrderByWithRelationInput.schema.ts";
import { LibroEtiquetaWhereInputObjectSchema as LibroEtiquetaWhereInputObjectSchema } from "./objects/LibroEtiquetaWhereInput.schema.ts";
import { LibroEtiquetaWhereUniqueInputObjectSchema as LibroEtiquetaWhereUniqueInputObjectSchema } from "./objects/LibroEtiquetaWhereUniqueInput.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LibroEtiquetaFindFirstSelectSchema: z.ZodType<Prisma.LibroEtiquetaSelect> = z
	.object({
		libroId: z.boolean().optional(),
		etiquetaId: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
		libro: z.union([z.boolean(), z.lazy(() => LibroArgsObjectSchema)]).optional(),
		etiqueta: z.union([z.boolean(), z.lazy(() => EtiquetaArgsObjectSchema)]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.LibroEtiquetaSelect>;

export const LibroEtiquetaFindFirstSelectZodSchema = z
	.object({
		libroId: z.boolean().optional(),
		etiquetaId: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
		libro: z.union([z.boolean(), z.lazy(() => LibroArgsObjectSchema)]).optional(),
		etiqueta: z.union([z.boolean(), z.lazy(() => EtiquetaArgsObjectSchema)]).optional(),
	})
	.strict();

export const LibroEtiquetaFindFirstSchema: z.ZodType<Prisma.LibroEtiquetaFindFirstArgs> = z
	.object({
		select: LibroEtiquetaFindFirstSelectSchema.optional(),
		include: z.lazy(() => LibroEtiquetaIncludeObjectSchema.optional()),
		orderBy: z.union([LibroEtiquetaOrderByWithRelationInputObjectSchema, LibroEtiquetaOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: LibroEtiquetaWhereInputObjectSchema.optional(),
		cursor: LibroEtiquetaWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([LibroEtiquetaScalarFieldEnumSchema, LibroEtiquetaScalarFieldEnumSchema.array()]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.LibroEtiquetaFindFirstArgs>;

export const LibroEtiquetaFindFirstZodSchema = z
	.object({
		select: LibroEtiquetaFindFirstSelectSchema.optional(),
		include: z.lazy(() => LibroEtiquetaIncludeObjectSchema.optional()),
		orderBy: z.union([LibroEtiquetaOrderByWithRelationInputObjectSchema, LibroEtiquetaOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: LibroEtiquetaWhereInputObjectSchema.optional(),
		cursor: LibroEtiquetaWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([LibroEtiquetaScalarFieldEnumSchema, LibroEtiquetaScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();
