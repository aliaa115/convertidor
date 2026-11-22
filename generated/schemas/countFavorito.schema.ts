import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { FavoritoCountAggregateInputObjectSchema as FavoritoCountAggregateInputObjectSchema } from "./objects/FavoritoCountAggregateInput.schema.ts";
import { FavoritoOrderByWithRelationInputObjectSchema as FavoritoOrderByWithRelationInputObjectSchema } from "./objects/FavoritoOrderByWithRelationInput.schema.ts";
import { FavoritoWhereInputObjectSchema as FavoritoWhereInputObjectSchema } from "./objects/FavoritoWhereInput.schema.ts";
import { FavoritoWhereUniqueInputObjectSchema as FavoritoWhereUniqueInputObjectSchema } from "./objects/FavoritoWhereUniqueInput.schema.ts";

export const FavoritoCountSchema: z.ZodType<Prisma.FavoritoCountArgs> = z
	.object({
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
		select: z
			.union([z.literal(true), FavoritoCountAggregateInputObjectSchema])
			.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.FavoritoCountArgs>;

export const FavoritoCountZodSchema = z
	.object({
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
		select: z
			.union([z.literal(true), FavoritoCountAggregateInputObjectSchema])
			.optional(),
	})
	.strict();
