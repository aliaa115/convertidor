import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { EtiquetaScalarFieldEnumSchema } from "./enums/EtiquetaScalarFieldEnum.schema.ts";
import { LibroEtiquetaFindManySchema } from "./findManyLibroEtiqueta.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./objects/EstadoArgs.schema.ts";
import { EtiquetaCountOutputTypeArgsObjectSchema as EtiquetaCountOutputTypeArgsObjectSchema } from "./objects/EtiquetaCountOutputTypeArgs.schema.ts";
import { EtiquetaIncludeObjectSchema as EtiquetaIncludeObjectSchema } from "./objects/EtiquetaInclude.schema.ts";
import { EtiquetaOrderByWithRelationInputObjectSchema as EtiquetaOrderByWithRelationInputObjectSchema } from "./objects/EtiquetaOrderByWithRelationInput.schema.ts";
import { EtiquetaWhereInputObjectSchema as EtiquetaWhereInputObjectSchema } from "./objects/EtiquetaWhereInput.schema.ts";
import { EtiquetaWhereUniqueInputObjectSchema as EtiquetaWhereUniqueInputObjectSchema } from "./objects/EtiquetaWhereUniqueInput.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EtiquetaFindManySelectSchema: z.ZodType<Prisma.EtiquetaSelect> = z
	.object({
		id: z.boolean().optional(),
		nombre: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
		libros: z.union([z.boolean(), z.lazy(() => LibroEtiquetaFindManySchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => EtiquetaCountOutputTypeArgsObjectSchema)]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.EtiquetaSelect>;

export const EtiquetaFindManySelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		nombre: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
		libros: z.union([z.boolean(), z.lazy(() => LibroEtiquetaFindManySchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => EtiquetaCountOutputTypeArgsObjectSchema)]).optional(),
	})
	.strict();

export const EtiquetaFindManySchema: z.ZodType<Prisma.EtiquetaFindManyArgs> = z
	.object({
		select: EtiquetaFindManySelectSchema.optional(),
		include: z.lazy(() => EtiquetaIncludeObjectSchema.optional()),
		orderBy: z.union([EtiquetaOrderByWithRelationInputObjectSchema, EtiquetaOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: EtiquetaWhereInputObjectSchema.optional(),
		cursor: EtiquetaWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([EtiquetaScalarFieldEnumSchema, EtiquetaScalarFieldEnumSchema.array()]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.EtiquetaFindManyArgs>;

export const EtiquetaFindManyZodSchema = z
	.object({
		select: EtiquetaFindManySelectSchema.optional(),
		include: z.lazy(() => EtiquetaIncludeObjectSchema.optional()),
		orderBy: z.union([EtiquetaOrderByWithRelationInputObjectSchema, EtiquetaOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: EtiquetaWhereInputObjectSchema.optional(),
		cursor: EtiquetaWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([EtiquetaScalarFieldEnumSchema, EtiquetaScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();
