import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { FavoritoScalarFieldEnumSchema } from "./enums/FavoritoScalarFieldEnum.schema.ts";
import { FavoritoIncludeObjectSchema as FavoritoIncludeObjectSchema } from "./objects/FavoritoInclude.schema.ts";
import { FavoritoOrderByWithRelationInputObjectSchema as FavoritoOrderByWithRelationInputObjectSchema } from "./objects/FavoritoOrderByWithRelationInput.schema.ts";
import { FavoritoWhereInputObjectSchema as FavoritoWhereInputObjectSchema } from "./objects/FavoritoWhereInput.schema.ts";
import { FavoritoWhereUniqueInputObjectSchema as FavoritoWhereUniqueInputObjectSchema } from "./objects/FavoritoWhereUniqueInput.schema.ts";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const FavoritoFindManySelectSchema: z.ZodType<Prisma.FavoritoSelect> = z
	.object({
		id: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		escritorId: z.boolean().optional(),
		escritor: z.boolean().optional(),
		libroId: z.boolean().optional(),
		libro: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.boolean().optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.FavoritoSelect>;

export const FavoritoFindManySelectZodSchema = z
	.object({
		id: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		escritorId: z.boolean().optional(),
		escritor: z.boolean().optional(),
		libroId: z.boolean().optional(),
		libro: z.boolean().optional(),
		estadoId: z.boolean().optional(),
		estado: z.boolean().optional(),
	})
	.strict();

export const FavoritoFindManySchema: z.ZodType<Prisma.FavoritoFindManyArgs> = z
	.object({
		select: FavoritoFindManySelectSchema.optional(),
		include: z.lazy(() => FavoritoIncludeObjectSchema.optional()),
		orderBy: z
			.union([
				FavoritoOrderByWithRelationInputObjectSchema,
				FavoritoOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: FavoritoWhereInputObjectSchema.optional(),
		cursor: FavoritoWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([
				FavoritoScalarFieldEnumSchema,
				FavoritoScalarFieldEnumSchema.array(),
			])
			.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.FavoritoFindManyArgs>;

export const FavoritoFindManyZodSchema = z
	.object({
		select: FavoritoFindManySelectSchema.optional(),
		include: z.lazy(() => FavoritoIncludeObjectSchema.optional()),
		orderBy: z
			.union([
				FavoritoOrderByWithRelationInputObjectSchema,
				FavoritoOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: FavoritoWhereInputObjectSchema.optional(),
		cursor: FavoritoWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([
				FavoritoScalarFieldEnumSchema,
				FavoritoScalarFieldEnumSchema.array(),
			])
			.optional(),
	})
	.strict();
