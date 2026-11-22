import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { CapituloScalarFieldEnumSchema } from "./enums/CapituloScalarFieldEnum.schema.ts";
import { CapituloIncludeObjectSchema as CapituloIncludeObjectSchema } from "./objects/CapituloInclude.schema.ts";
import { CapituloOrderByWithRelationInputObjectSchema as CapituloOrderByWithRelationInputObjectSchema } from "./objects/CapituloOrderByWithRelationInput.schema.ts";
import { CapituloWhereInputObjectSchema as CapituloWhereInputObjectSchema } from "./objects/CapituloWhereInput.schema.ts";
import { CapituloWhereUniqueInputObjectSchema as CapituloWhereUniqueInputObjectSchema } from "./objects/CapituloWhereUniqueInput.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CapituloFindFirstSelectSchema: z.ZodType<Prisma.CapituloSelect> = z
	.object({
		id: z.boolean().optional(),
		nombre: z.boolean().optional(),
		indice: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		libroId: z.boolean().optional(),
		libro: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.boolean().optional(),
		parrafos: z.boolean().optional(),
		notasAutor: z.boolean().optional(),
		_count: z.boolean().optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.CapituloSelect>;

export const CapituloFindFirstSelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		nombre: z.boolean().optional(),
		indice: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		libroId: z.boolean().optional(),
		libro: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.boolean().optional(),
		parrafos: z.boolean().optional(),
		notasAutor: z.boolean().optional(),
		_count: z.boolean().optional(),
	})
	.strict();

export const CapituloFindFirstSchema: z.ZodType<Prisma.CapituloFindFirstArgs> =
	z
		.object({
			select: CapituloFindFirstSelectSchema.optional(),
			include: z.lazy(() => CapituloIncludeObjectSchema.optional()),
			orderBy: z
				.union([
					CapituloOrderByWithRelationInputObjectSchema,
					CapituloOrderByWithRelationInputObjectSchema.array(),
				])
				.optional(),
			where: CapituloWhereInputObjectSchema.optional(),
			cursor: CapituloWhereUniqueInputObjectSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
			distinct: z
				.union([
					CapituloScalarFieldEnumSchema,
					CapituloScalarFieldEnumSchema.array(),
				])
				.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.CapituloFindFirstArgs>;

export const CapituloFindFirstZodSchema = z
	.object({
		select: CapituloFindFirstSelectSchema.optional(),
		include: z.lazy(() => CapituloIncludeObjectSchema.optional()),
		orderBy: z
			.union([
				CapituloOrderByWithRelationInputObjectSchema,
				CapituloOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: CapituloWhereInputObjectSchema.optional(),
		cursor: CapituloWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([
				CapituloScalarFieldEnumSchema,
				CapituloScalarFieldEnumSchema.array(),
			])
			.optional(),
	})
	.strict();
