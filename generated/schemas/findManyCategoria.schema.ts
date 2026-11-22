import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { CategoriaScalarFieldEnumSchema } from "./enums/CategoriaScalarFieldEnum.schema.ts";
import { LibroCategoriaFindManySchema } from "./findManyLibroCategoria.schema.ts";
import { CategoriaCountOutputTypeArgsObjectSchema as CategoriaCountOutputTypeArgsObjectSchema } from "./objects/CategoriaCountOutputTypeArgs.schema.ts";
import { CategoriaIncludeObjectSchema as CategoriaIncludeObjectSchema } from "./objects/CategoriaInclude.schema.ts";
import { CategoriaOrderByWithRelationInputObjectSchema as CategoriaOrderByWithRelationInputObjectSchema } from "./objects/CategoriaOrderByWithRelationInput.schema.ts";
import { CategoriaWhereInputObjectSchema as CategoriaWhereInputObjectSchema } from "./objects/CategoriaWhereInput.schema.ts";
import { CategoriaWhereUniqueInputObjectSchema as CategoriaWhereUniqueInputObjectSchema } from "./objects/CategoriaWhereUniqueInput.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./objects/EstadoArgs.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CategoriaFindManySelectSchema: z.ZodType<Prisma.CategoriaSelect> = z
	.object({
		id: z.boolean().optional(),
		nombre: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
		libros: z.union([z.boolean(), z.lazy(() => LibroCategoriaFindManySchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => CategoriaCountOutputTypeArgsObjectSchema)]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.CategoriaSelect>;

export const CategoriaFindManySelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		nombre: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
		libros: z.union([z.boolean(), z.lazy(() => LibroCategoriaFindManySchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => CategoriaCountOutputTypeArgsObjectSchema)]).optional(),
	})
	.strict();

export const CategoriaFindManySchema: z.ZodType<Prisma.CategoriaFindManyArgs> = z
	.object({
		select: CategoriaFindManySelectSchema.optional(),
		include: z.lazy(() => CategoriaIncludeObjectSchema.optional()),
		orderBy: z.union([CategoriaOrderByWithRelationInputObjectSchema, CategoriaOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: CategoriaWhereInputObjectSchema.optional(),
		cursor: CategoriaWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([CategoriaScalarFieldEnumSchema, CategoriaScalarFieldEnumSchema.array()]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.CategoriaFindManyArgs>;

export const CategoriaFindManyZodSchema = z
	.object({
		select: CategoriaFindManySelectSchema.optional(),
		include: z.lazy(() => CategoriaIncludeObjectSchema.optional()),
		orderBy: z.union([CategoriaOrderByWithRelationInputObjectSchema, CategoriaOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: CategoriaWhereInputObjectSchema.optional(),
		cursor: CategoriaWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([CategoriaScalarFieldEnumSchema, CategoriaScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();
