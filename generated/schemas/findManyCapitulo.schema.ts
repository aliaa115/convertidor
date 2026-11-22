import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { CapituloScalarFieldEnumSchema } from "./enums/CapituloScalarFieldEnum.schema.ts";
import { NotaAutorFindManySchema } from "./findManyNotaAutor.schema.ts";
import { ParrafoFindManySchema } from "./findManyParrafo.schema.ts";
import { CapituloCountOutputTypeArgsObjectSchema as CapituloCountOutputTypeArgsObjectSchema } from "./objects/CapituloCountOutputTypeArgs.schema.ts";
import { CapituloIncludeObjectSchema as CapituloIncludeObjectSchema } from "./objects/CapituloInclude.schema.ts";
import { CapituloOrderByWithRelationInputObjectSchema as CapituloOrderByWithRelationInputObjectSchema } from "./objects/CapituloOrderByWithRelationInput.schema.ts";
import { CapituloWhereInputObjectSchema as CapituloWhereInputObjectSchema } from "./objects/CapituloWhereInput.schema.ts";
import { CapituloWhereUniqueInputObjectSchema as CapituloWhereUniqueInputObjectSchema } from "./objects/CapituloWhereUniqueInput.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./objects/EstadoArgs.schema.ts";
import { LibroArgsObjectSchema as LibroArgsObjectSchema } from "./objects/LibroArgs.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CapituloFindManySelectSchema: z.ZodType<Prisma.CapituloSelect> = z
	.object({
		id: z.boolean().optional(),
		nombre: z.boolean().optional(),
		indice: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		libroId: z.boolean().optional(),
		libro: z.union([z.boolean(), z.lazy(() => LibroArgsObjectSchema)]).optional(),
		estadoId: z.boolean().optional(),
		estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
		parrafos: z.union([z.boolean(), z.lazy(() => ParrafoFindManySchema)]).optional(),
		notasAutor: z.union([z.boolean(), z.lazy(() => NotaAutorFindManySchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => CapituloCountOutputTypeArgsObjectSchema)]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.CapituloSelect>;

export const CapituloFindManySelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		nombre: z.boolean().optional(),
		indice: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		libroId: z.boolean().optional(),
		libro: z.union([z.boolean(), z.lazy(() => LibroArgsObjectSchema)]).optional(),
		estadoId: z.boolean().optional(),
		estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
		parrafos: z.union([z.boolean(), z.lazy(() => ParrafoFindManySchema)]).optional(),
		notasAutor: z.union([z.boolean(), z.lazy(() => NotaAutorFindManySchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => CapituloCountOutputTypeArgsObjectSchema)]).optional(),
	})
	.strict();

export const CapituloFindManySchema: z.ZodType<Prisma.CapituloFindManyArgs> = z
	.object({
		select: CapituloFindManySelectSchema.optional(),
		include: z.lazy(() => CapituloIncludeObjectSchema.optional()),
		orderBy: z.union([CapituloOrderByWithRelationInputObjectSchema, CapituloOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: CapituloWhereInputObjectSchema.optional(),
		cursor: CapituloWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([CapituloScalarFieldEnumSchema, CapituloScalarFieldEnumSchema.array()]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.CapituloFindManyArgs>;

export const CapituloFindManyZodSchema = z
	.object({
		select: CapituloFindManySelectSchema.optional(),
		include: z.lazy(() => CapituloIncludeObjectSchema.optional()),
		orderBy: z.union([CapituloOrderByWithRelationInputObjectSchema, CapituloOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: CapituloWhereInputObjectSchema.optional(),
		cursor: CapituloWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([CapituloScalarFieldEnumSchema, CapituloScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();
