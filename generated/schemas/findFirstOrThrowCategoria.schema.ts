import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { CategoriaScalarFieldEnumSchema } from "./enums/CategoriaScalarFieldEnum.schema.ts";
import { CategoriaIncludeObjectSchema as CategoriaIncludeObjectSchema } from "./objects/CategoriaInclude.schema.ts";
import { CategoriaOrderByWithRelationInputObjectSchema as CategoriaOrderByWithRelationInputObjectSchema } from "./objects/CategoriaOrderByWithRelationInput.schema.ts";
import { CategoriaWhereInputObjectSchema as CategoriaWhereInputObjectSchema } from "./objects/CategoriaWhereInput.schema.ts";
import { CategoriaWhereUniqueInputObjectSchema as CategoriaWhereUniqueInputObjectSchema } from "./objects/CategoriaWhereUniqueInput.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CategoriaFindFirstOrThrowSelectSchema: z.ZodType<Prisma.CategoriaSelect> =
	z
		.object({
			id: z.boolean().optional(),
			nombre: z.boolean().optional(),
			createdAt: z.boolean().optional(),
			updatedAt: z.boolean().optional(),
			estadoId: z.boolean().optional(),
			estado: z.boolean().optional(),
			libros: z.boolean().optional(),
			_count: z.boolean().optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.CategoriaSelect>;

export const CategoriaFindFirstOrThrowSelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		nombre: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.boolean().optional(),
		libros: z.boolean().optional(),
		_count: z.boolean().optional(),
	})
	.strict();

export const CategoriaFindFirstOrThrowSchema: z.ZodType<Prisma.CategoriaFindFirstOrThrowArgs> =
	z
		.object({
			select: CategoriaFindFirstOrThrowSelectSchema.optional(),
			include: z.lazy(() => CategoriaIncludeObjectSchema.optional()),
			orderBy: z
				.union([
					CategoriaOrderByWithRelationInputObjectSchema,
					CategoriaOrderByWithRelationInputObjectSchema.array(),
				])
				.optional(),
			where: CategoriaWhereInputObjectSchema.optional(),
			cursor: CategoriaWhereUniqueInputObjectSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
			distinct: z
				.union([
					CategoriaScalarFieldEnumSchema,
					CategoriaScalarFieldEnumSchema.array(),
				])
				.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.CategoriaFindFirstOrThrowArgs>;

export const CategoriaFindFirstOrThrowZodSchema = z
	.object({
		select: CategoriaFindFirstOrThrowSelectSchema.optional(),
		include: z.lazy(() => CategoriaIncludeObjectSchema.optional()),
		orderBy: z
			.union([
				CategoriaOrderByWithRelationInputObjectSchema,
				CategoriaOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: CategoriaWhereInputObjectSchema.optional(),
		cursor: CategoriaWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([
				CategoriaScalarFieldEnumSchema,
				CategoriaScalarFieldEnumSchema.array(),
			])
			.optional(),
	})
	.strict();
