import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { GlosarioScalarFieldEnumSchema } from "./enums/GlosarioScalarFieldEnum.schema.ts";
import { EscritorArgsObjectSchema as EscritorArgsObjectSchema } from "./objects/EscritorArgs.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./objects/EstadoArgs.schema.ts";
import { GlosarioIncludeObjectSchema as GlosarioIncludeObjectSchema } from "./objects/GlosarioInclude.schema.ts";
import { GlosarioOrderByWithRelationInputObjectSchema as GlosarioOrderByWithRelationInputObjectSchema } from "./objects/GlosarioOrderByWithRelationInput.schema.ts";
import { GlosarioWhereInputObjectSchema as GlosarioWhereInputObjectSchema } from "./objects/GlosarioWhereInput.schema.ts";
import { GlosarioWhereUniqueInputObjectSchema as GlosarioWhereUniqueInputObjectSchema } from "./objects/GlosarioWhereUniqueInput.schema.ts";
import { LibroArgsObjectSchema as LibroArgsObjectSchema } from "./objects/LibroArgs.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const GlosarioFindFirstOrThrowSelectSchema: z.ZodType<Prisma.GlosarioSelect> = z
	.object({
		id: z.boolean().optional(),
		palabra: z.boolean().optional(),
		significado: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		libroId: z.boolean().optional(),
		libro: z.union([z.boolean(), z.lazy(() => LibroArgsObjectSchema)]).optional(),
		escritorId: z.boolean().optional(),
		escritor: z.union([z.boolean(), z.lazy(() => EscritorArgsObjectSchema)]).optional(),
		estadoId: z.boolean().optional(),
		estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.GlosarioSelect>;

export const GlosarioFindFirstOrThrowSelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		palabra: z.boolean().optional(),
		significado: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		libroId: z.boolean().optional(),
		libro: z.union([z.boolean(), z.lazy(() => LibroArgsObjectSchema)]).optional(),
		escritorId: z.boolean().optional(),
		escritor: z.union([z.boolean(), z.lazy(() => EscritorArgsObjectSchema)]).optional(),
		estadoId: z.boolean().optional(),
		estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
	})
	.strict();

export const GlosarioFindFirstOrThrowSchema: z.ZodType<Prisma.GlosarioFindFirstOrThrowArgs> = z
	.object({
		select: GlosarioFindFirstOrThrowSelectSchema.optional(),
		include: z.lazy(() => GlosarioIncludeObjectSchema.optional()),
		orderBy: z.union([GlosarioOrderByWithRelationInputObjectSchema, GlosarioOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: GlosarioWhereInputObjectSchema.optional(),
		cursor: GlosarioWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([GlosarioScalarFieldEnumSchema, GlosarioScalarFieldEnumSchema.array()]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.GlosarioFindFirstOrThrowArgs>;

export const GlosarioFindFirstOrThrowZodSchema = z
	.object({
		select: GlosarioFindFirstOrThrowSelectSchema.optional(),
		include: z.lazy(() => GlosarioIncludeObjectSchema.optional()),
		orderBy: z.union([GlosarioOrderByWithRelationInputObjectSchema, GlosarioOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: GlosarioWhereInputObjectSchema.optional(),
		cursor: GlosarioWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([GlosarioScalarFieldEnumSchema, GlosarioScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();
