import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { LibroCategoriaScalarFieldEnumSchema } from "./enums/LibroCategoriaScalarFieldEnum.schema.ts";
import { CategoriaArgsObjectSchema as CategoriaArgsObjectSchema } from "./objects/CategoriaArgs.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./objects/EstadoArgs.schema.ts";
import { LibroArgsObjectSchema as LibroArgsObjectSchema } from "./objects/LibroArgs.schema.ts";
import { LibroCategoriaIncludeObjectSchema as LibroCategoriaIncludeObjectSchema } from "./objects/LibroCategoriaInclude.schema.ts";
import { LibroCategoriaOrderByWithRelationInputObjectSchema as LibroCategoriaOrderByWithRelationInputObjectSchema } from "./objects/LibroCategoriaOrderByWithRelationInput.schema.ts";
import { LibroCategoriaWhereInputObjectSchema as LibroCategoriaWhereInputObjectSchema } from "./objects/LibroCategoriaWhereInput.schema.ts";
import { LibroCategoriaWhereUniqueInputObjectSchema as LibroCategoriaWhereUniqueInputObjectSchema } from "./objects/LibroCategoriaWhereUniqueInput.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LibroCategoriaFindFirstSelectSchema: z.ZodType<Prisma.LibroCategoriaSelect> = z
	.object({
		libroId: z.boolean().optional(),
		categoriaId: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
		libro: z.union([z.boolean(), z.lazy(() => LibroArgsObjectSchema)]).optional(),
		categoria: z.union([z.boolean(), z.lazy(() => CategoriaArgsObjectSchema)]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.LibroCategoriaSelect>;

export const LibroCategoriaFindFirstSelectZodSchema = z
	.object({
		libroId: z.boolean().optional(),
		categoriaId: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
		libro: z.union([z.boolean(), z.lazy(() => LibroArgsObjectSchema)]).optional(),
		categoria: z.union([z.boolean(), z.lazy(() => CategoriaArgsObjectSchema)]).optional(),
	})
	.strict();

export const LibroCategoriaFindFirstSchema: z.ZodType<Prisma.LibroCategoriaFindFirstArgs> = z
	.object({
		select: LibroCategoriaFindFirstSelectSchema.optional(),
		include: z.lazy(() => LibroCategoriaIncludeObjectSchema.optional()),
		orderBy: z.union([LibroCategoriaOrderByWithRelationInputObjectSchema, LibroCategoriaOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: LibroCategoriaWhereInputObjectSchema.optional(),
		cursor: LibroCategoriaWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([LibroCategoriaScalarFieldEnumSchema, LibroCategoriaScalarFieldEnumSchema.array()]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.LibroCategoriaFindFirstArgs>;

export const LibroCategoriaFindFirstZodSchema = z
	.object({
		select: LibroCategoriaFindFirstSelectSchema.optional(),
		include: z.lazy(() => LibroCategoriaIncludeObjectSchema.optional()),
		orderBy: z.union([LibroCategoriaOrderByWithRelationInputObjectSchema, LibroCategoriaOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: LibroCategoriaWhereInputObjectSchema.optional(),
		cursor: LibroCategoriaWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([LibroCategoriaScalarFieldEnumSchema, LibroCategoriaScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();
