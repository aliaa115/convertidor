import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { FavoritoAvgAggregateInputObjectSchema as FavoritoAvgAggregateInputObjectSchema } from "./objects/FavoritoAvgAggregateInput.schema.ts";
import { FavoritoCountAggregateInputObjectSchema as FavoritoCountAggregateInputObjectSchema } from "./objects/FavoritoCountAggregateInput.schema.ts";
import { FavoritoMaxAggregateInputObjectSchema as FavoritoMaxAggregateInputObjectSchema } from "./objects/FavoritoMaxAggregateInput.schema.ts";
import { FavoritoMinAggregateInputObjectSchema as FavoritoMinAggregateInputObjectSchema } from "./objects/FavoritoMinAggregateInput.schema.ts";
import { FavoritoOrderByWithRelationInputObjectSchema as FavoritoOrderByWithRelationInputObjectSchema } from "./objects/FavoritoOrderByWithRelationInput.schema.ts";
import { FavoritoSumAggregateInputObjectSchema as FavoritoSumAggregateInputObjectSchema } from "./objects/FavoritoSumAggregateInput.schema.ts";
import { FavoritoWhereInputObjectSchema as FavoritoWhereInputObjectSchema } from "./objects/FavoritoWhereInput.schema.ts";
import { FavoritoWhereUniqueInputObjectSchema as FavoritoWhereUniqueInputObjectSchema } from "./objects/FavoritoWhereUniqueInput.schema.ts";

export const FavoritoAggregateSchema: z.ZodType<Prisma.FavoritoAggregateArgs> = z
	.object({
		orderBy: z.union([FavoritoOrderByWithRelationInputObjectSchema, FavoritoOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: FavoritoWhereInputObjectSchema.optional(),
		cursor: FavoritoWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z.union([z.literal(true), FavoritoCountAggregateInputObjectSchema]).optional(),
		_min: FavoritoMinAggregateInputObjectSchema.optional(),
		_max: FavoritoMaxAggregateInputObjectSchema.optional(),
		_avg: FavoritoAvgAggregateInputObjectSchema.optional(),
		_sum: FavoritoSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.FavoritoAggregateArgs>;

export const FavoritoAggregateZodSchema = z
	.object({
		orderBy: z.union([FavoritoOrderByWithRelationInputObjectSchema, FavoritoOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: FavoritoWhereInputObjectSchema.optional(),
		cursor: FavoritoWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z.union([z.literal(true), FavoritoCountAggregateInputObjectSchema]).optional(),
		_min: FavoritoMinAggregateInputObjectSchema.optional(),
		_max: FavoritoMaxAggregateInputObjectSchema.optional(),
		_avg: FavoritoAvgAggregateInputObjectSchema.optional(),
		_sum: FavoritoSumAggregateInputObjectSchema.optional(),
	})
	.strict();
