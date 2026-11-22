import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { IdiomaScalarFieldEnumSchema } from "./enums/IdiomaScalarFieldEnum.schema.ts";
import { IdiomaIncludeObjectSchema as IdiomaIncludeObjectSchema } from "./objects/IdiomaInclude.schema.ts";
import { IdiomaOrderByWithRelationInputObjectSchema as IdiomaOrderByWithRelationInputObjectSchema } from "./objects/IdiomaOrderByWithRelationInput.schema.ts";
import { IdiomaWhereInputObjectSchema as IdiomaWhereInputObjectSchema } from "./objects/IdiomaWhereInput.schema.ts";
import { IdiomaWhereUniqueInputObjectSchema as IdiomaWhereUniqueInputObjectSchema } from "./objects/IdiomaWhereUniqueInput.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const IdiomaFindFirstOrThrowSelectSchema: z.ZodType<Prisma.IdiomaSelect> =
	z
		.object({
			id: z.boolean().optional(),
			nombre: z.boolean().optional(),
			siglas: z.boolean().optional(),
			createdAt: z.boolean().optional(),
			updatedAt: z.boolean().optional(),
			estadoId: z.boolean().optional(),
			estado: z.boolean().optional(),
			libros: z.boolean().optional(),
			_count: z.boolean().optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.IdiomaSelect>;

export const IdiomaFindFirstOrThrowSelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		nombre: z.boolean().optional(),
		siglas: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.boolean().optional(),
		libros: z.boolean().optional(),
		_count: z.boolean().optional(),
	})
	.strict();

export const IdiomaFindFirstOrThrowSchema: z.ZodType<Prisma.IdiomaFindFirstOrThrowArgs> =
	z
		.object({
			select: IdiomaFindFirstOrThrowSelectSchema.optional(),
			include: z.lazy(() => IdiomaIncludeObjectSchema.optional()),
			orderBy: z
				.union([
					IdiomaOrderByWithRelationInputObjectSchema,
					IdiomaOrderByWithRelationInputObjectSchema.array(),
				])
				.optional(),
			where: IdiomaWhereInputObjectSchema.optional(),
			cursor: IdiomaWhereUniqueInputObjectSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
			distinct: z
				.union([
					IdiomaScalarFieldEnumSchema,
					IdiomaScalarFieldEnumSchema.array(),
				])
				.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.IdiomaFindFirstOrThrowArgs>;

export const IdiomaFindFirstOrThrowZodSchema = z
	.object({
		select: IdiomaFindFirstOrThrowSelectSchema.optional(),
		include: z.lazy(() => IdiomaIncludeObjectSchema.optional()),
		orderBy: z
			.union([
				IdiomaOrderByWithRelationInputObjectSchema,
				IdiomaOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: IdiomaWhereInputObjectSchema.optional(),
		cursor: IdiomaWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([IdiomaScalarFieldEnumSchema, IdiomaScalarFieldEnumSchema.array()])
			.optional(),
	})
	.strict();
