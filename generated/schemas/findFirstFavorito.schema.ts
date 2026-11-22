import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { FavoritoScalarFieldEnumSchema } from "./enums/FavoritoScalarFieldEnum.schema.ts";
import { EscritorArgsObjectSchema as EscritorArgsObjectSchema } from "./objects/EscritorArgs.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./objects/EstadoArgs.schema.ts";
import { FavoritoIncludeObjectSchema as FavoritoIncludeObjectSchema } from "./objects/FavoritoInclude.schema.ts";
import { FavoritoOrderByWithRelationInputObjectSchema as FavoritoOrderByWithRelationInputObjectSchema } from "./objects/FavoritoOrderByWithRelationInput.schema.ts";
import { FavoritoWhereInputObjectSchema as FavoritoWhereInputObjectSchema } from "./objects/FavoritoWhereInput.schema.ts";
import { FavoritoWhereUniqueInputObjectSchema as FavoritoWhereUniqueInputObjectSchema } from "./objects/FavoritoWhereUniqueInput.schema.ts";
import { LibroArgsObjectSchema as LibroArgsObjectSchema } from "./objects/LibroArgs.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const FavoritoFindFirstSelectSchema: z.ZodType<Prisma.FavoritoSelect> = z
	.object({
		id: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		escritorId: z.boolean().optional(),
		escritor: z.union([z.boolean(), z.lazy(() => EscritorArgsObjectSchema)]).optional(),
		libroId: z.boolean().optional(),
		libro: z.union([z.boolean(), z.lazy(() => LibroArgsObjectSchema)]).optional(),
		estadoId: z.boolean().optional(),
		estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.FavoritoSelect>;

export const FavoritoFindFirstSelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		escritorId: z.boolean().optional(),
		escritor: z.union([z.boolean(), z.lazy(() => EscritorArgsObjectSchema)]).optional(),
		libroId: z.boolean().optional(),
		libro: z.union([z.boolean(), z.lazy(() => LibroArgsObjectSchema)]).optional(),
		estadoId: z.boolean().optional(),
		estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
	})
	.strict();

export const FavoritoFindFirstSchema: z.ZodType<Prisma.FavoritoFindFirstArgs> = z
	.object({
		select: FavoritoFindFirstSelectSchema.optional(),
		include: z.lazy(() => FavoritoIncludeObjectSchema.optional()),
		orderBy: z.union([FavoritoOrderByWithRelationInputObjectSchema, FavoritoOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: FavoritoWhereInputObjectSchema.optional(),
		cursor: FavoritoWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([FavoritoScalarFieldEnumSchema, FavoritoScalarFieldEnumSchema.array()]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.FavoritoFindFirstArgs>;

export const FavoritoFindFirstZodSchema = z
	.object({
		select: FavoritoFindFirstSelectSchema.optional(),
		include: z.lazy(() => FavoritoIncludeObjectSchema.optional()),
		orderBy: z.union([FavoritoOrderByWithRelationInputObjectSchema, FavoritoOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: FavoritoWhereInputObjectSchema.optional(),
		cursor: FavoritoWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([FavoritoScalarFieldEnumSchema, FavoritoScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();
