import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { FavoritoScalarFieldEnumSchema } from "./enums/FavoritoScalarFieldEnum.schema.ts";
import { FavoritoAvgAggregateInputObjectSchema as FavoritoAvgAggregateInputObjectSchema } from "./objects/FavoritoAvgAggregateInput.schema.ts";
import { FavoritoCountAggregateInputObjectSchema as FavoritoCountAggregateInputObjectSchema } from "./objects/FavoritoCountAggregateInput.schema.ts";
import { FavoritoMaxAggregateInputObjectSchema as FavoritoMaxAggregateInputObjectSchema } from "./objects/FavoritoMaxAggregateInput.schema.ts";
import { FavoritoMinAggregateInputObjectSchema as FavoritoMinAggregateInputObjectSchema } from "./objects/FavoritoMinAggregateInput.schema.ts";
import { FavoritoOrderByWithAggregationInputObjectSchema as FavoritoOrderByWithAggregationInputObjectSchema } from "./objects/FavoritoOrderByWithAggregationInput.schema.ts";
import { FavoritoScalarWhereWithAggregatesInputObjectSchema as FavoritoScalarWhereWithAggregatesInputObjectSchema } from "./objects/FavoritoScalarWhereWithAggregatesInput.schema.ts";
import { FavoritoSumAggregateInputObjectSchema as FavoritoSumAggregateInputObjectSchema } from "./objects/FavoritoSumAggregateInput.schema.ts";
import { FavoritoWhereInputObjectSchema as FavoritoWhereInputObjectSchema } from "./objects/FavoritoWhereInput.schema.ts";

export const FavoritoGroupBySchema: z.ZodType<Prisma.FavoritoGroupByArgs> = z
	.object({
		where: FavoritoWhereInputObjectSchema.optional(),
		orderBy: z
			.union([
				FavoritoOrderByWithAggregationInputObjectSchema,
				FavoritoOrderByWithAggregationInputObjectSchema.array(),
			])
			.optional(),
		having: FavoritoScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(FavoritoScalarFieldEnumSchema),
		_count: z
			.union([z.literal(true), FavoritoCountAggregateInputObjectSchema])
			.optional(),
		_min: FavoritoMinAggregateInputObjectSchema.optional(),
		_max: FavoritoMaxAggregateInputObjectSchema.optional(),
		_avg: FavoritoAvgAggregateInputObjectSchema.optional(),
		_sum: FavoritoSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.FavoritoGroupByArgs>;

export const FavoritoGroupByZodSchema = z
	.object({
		where: FavoritoWhereInputObjectSchema.optional(),
		orderBy: z
			.union([
				FavoritoOrderByWithAggregationInputObjectSchema,
				FavoritoOrderByWithAggregationInputObjectSchema.array(),
			])
			.optional(),
		having: FavoritoScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(FavoritoScalarFieldEnumSchema),
		_count: z
			.union([z.literal(true), FavoritoCountAggregateInputObjectSchema])
			.optional(),
		_min: FavoritoMinAggregateInputObjectSchema.optional(),
		_max: FavoritoMaxAggregateInputObjectSchema.optional(),
		_avg: FavoritoAvgAggregateInputObjectSchema.optional(),
		_sum: FavoritoSumAggregateInputObjectSchema.optional(),
	})
	.strict();
