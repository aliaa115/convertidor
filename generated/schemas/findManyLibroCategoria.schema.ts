import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { LibroCategoriaScalarFieldEnumSchema } from "./enums/LibroCategoriaScalarFieldEnum.schema.ts";
import { LibroCategoriaIncludeObjectSchema as LibroCategoriaIncludeObjectSchema } from "./objects/LibroCategoriaInclude.schema.ts";
import { LibroCategoriaOrderByWithRelationInputObjectSchema as LibroCategoriaOrderByWithRelationInputObjectSchema } from "./objects/LibroCategoriaOrderByWithRelationInput.schema.ts";
import { LibroCategoriaWhereInputObjectSchema as LibroCategoriaWhereInputObjectSchema } from "./objects/LibroCategoriaWhereInput.schema.ts";
import { LibroCategoriaWhereUniqueInputObjectSchema as LibroCategoriaWhereUniqueInputObjectSchema } from "./objects/LibroCategoriaWhereUniqueInput.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LibroCategoriaFindManySelectSchema: z.ZodType<Prisma.LibroCategoriaSelect> =
	z
		.object({
			libroId: z.boolean().optional(),
			categoriaId: z.boolean().optional(),
			createdAt: z.boolean().optional(),
			updatedAt: z.boolean().optional(),
			estadoId: z.boolean().optional(),
			estado: z.boolean().optional(),
			libro: z.boolean().optional(),
			categoria: z.boolean().optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.LibroCategoriaSelect>;

export const LibroCategoriaFindManySelectZodSchema = z
	.object({
		libroId: z.boolean().optional(),
		categoriaId: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.boolean().optional(),
		libro: z.boolean().optional(),
		categoria: z.boolean().optional(),
	})
	.strict();

export const LibroCategoriaFindManySchema: z.ZodType<Prisma.LibroCategoriaFindManyArgs> =
	z
		.object({
			select: LibroCategoriaFindManySelectSchema.optional(),
			include: z.lazy(() => LibroCategoriaIncludeObjectSchema.optional()),
			orderBy: z
				.union([
					LibroCategoriaOrderByWithRelationInputObjectSchema,
					LibroCategoriaOrderByWithRelationInputObjectSchema.array(),
				])
				.optional(),
			where: LibroCategoriaWhereInputObjectSchema.optional(),
			cursor: LibroCategoriaWhereUniqueInputObjectSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
			distinct: z
				.union([
					LibroCategoriaScalarFieldEnumSchema,
					LibroCategoriaScalarFieldEnumSchema.array(),
				])
				.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.LibroCategoriaFindManyArgs>;

export const LibroCategoriaFindManyZodSchema = z
	.object({
		select: LibroCategoriaFindManySelectSchema.optional(),
		include: z.lazy(() => LibroCategoriaIncludeObjectSchema.optional()),
		orderBy: z
			.union([
				LibroCategoriaOrderByWithRelationInputObjectSchema,
				LibroCategoriaOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: LibroCategoriaWhereInputObjectSchema.optional(),
		cursor: LibroCategoriaWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([
				LibroCategoriaScalarFieldEnumSchema,
				LibroCategoriaScalarFieldEnumSchema.array(),
			])
			.optional(),
	})
	.strict();
