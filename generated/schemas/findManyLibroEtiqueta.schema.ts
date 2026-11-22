import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { LibroEtiquetaScalarFieldEnumSchema } from "./enums/LibroEtiquetaScalarFieldEnum.schema.ts";
import { LibroEtiquetaIncludeObjectSchema as LibroEtiquetaIncludeObjectSchema } from "./objects/LibroEtiquetaInclude.schema.ts";
import { LibroEtiquetaOrderByWithRelationInputObjectSchema as LibroEtiquetaOrderByWithRelationInputObjectSchema } from "./objects/LibroEtiquetaOrderByWithRelationInput.schema.ts";
import { LibroEtiquetaWhereInputObjectSchema as LibroEtiquetaWhereInputObjectSchema } from "./objects/LibroEtiquetaWhereInput.schema.ts";
import { LibroEtiquetaWhereUniqueInputObjectSchema as LibroEtiquetaWhereUniqueInputObjectSchema } from "./objects/LibroEtiquetaWhereUniqueInput.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LibroEtiquetaFindManySelectSchema: z.ZodType<Prisma.LibroEtiquetaSelect> =
	z
		.object({
			libroId: z.boolean().optional(),
			etiquetaId: z.boolean().optional(),
			createdAt: z.boolean().optional(),
			updatedAt: z.boolean().optional(),
			estadoId: z.boolean().optional(),
			estado: z.boolean().optional(),
			libro: z.boolean().optional(),
			etiqueta: z.boolean().optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.LibroEtiquetaSelect>;

export const LibroEtiquetaFindManySelectZodSchema = z
	.object({
		libroId: z.boolean().optional(),
		etiquetaId: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.boolean().optional(),
		libro: z.boolean().optional(),
		etiqueta: z.boolean().optional(),
	})
	.strict();

export const LibroEtiquetaFindManySchema: z.ZodType<Prisma.LibroEtiquetaFindManyArgs> =
	z
		.object({
			select: LibroEtiquetaFindManySelectSchema.optional(),
			include: z.lazy(() => LibroEtiquetaIncludeObjectSchema.optional()),
			orderBy: z
				.union([
					LibroEtiquetaOrderByWithRelationInputObjectSchema,
					LibroEtiquetaOrderByWithRelationInputObjectSchema.array(),
				])
				.optional(),
			where: LibroEtiquetaWhereInputObjectSchema.optional(),
			cursor: LibroEtiquetaWhereUniqueInputObjectSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
			distinct: z
				.union([
					LibroEtiquetaScalarFieldEnumSchema,
					LibroEtiquetaScalarFieldEnumSchema.array(),
				])
				.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.LibroEtiquetaFindManyArgs>;

export const LibroEtiquetaFindManyZodSchema = z
	.object({
		select: LibroEtiquetaFindManySelectSchema.optional(),
		include: z.lazy(() => LibroEtiquetaIncludeObjectSchema.optional()),
		orderBy: z
			.union([
				LibroEtiquetaOrderByWithRelationInputObjectSchema,
				LibroEtiquetaOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: LibroEtiquetaWhereInputObjectSchema.optional(),
		cursor: LibroEtiquetaWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([
				LibroEtiquetaScalarFieldEnumSchema,
				LibroEtiquetaScalarFieldEnumSchema.array(),
			])
			.optional(),
	})
	.strict();
