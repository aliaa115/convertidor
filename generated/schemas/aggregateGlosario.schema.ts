import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { GlosarioAvgAggregateInputObjectSchema as GlosarioAvgAggregateInputObjectSchema } from "./objects/GlosarioAvgAggregateInput.schema.ts";
import { GlosarioCountAggregateInputObjectSchema as GlosarioCountAggregateInputObjectSchema } from "./objects/GlosarioCountAggregateInput.schema.ts";
import { GlosarioMaxAggregateInputObjectSchema as GlosarioMaxAggregateInputObjectSchema } from "./objects/GlosarioMaxAggregateInput.schema.ts";
import { GlosarioMinAggregateInputObjectSchema as GlosarioMinAggregateInputObjectSchema } from "./objects/GlosarioMinAggregateInput.schema.ts";
import { GlosarioOrderByWithRelationInputObjectSchema as GlosarioOrderByWithRelationInputObjectSchema } from "./objects/GlosarioOrderByWithRelationInput.schema.ts";
import { GlosarioSumAggregateInputObjectSchema as GlosarioSumAggregateInputObjectSchema } from "./objects/GlosarioSumAggregateInput.schema.ts";
import { GlosarioWhereInputObjectSchema as GlosarioWhereInputObjectSchema } from "./objects/GlosarioWhereInput.schema.ts";
import { GlosarioWhereUniqueInputObjectSchema as GlosarioWhereUniqueInputObjectSchema } from "./objects/GlosarioWhereUniqueInput.schema.ts";

export const GlosarioAggregateSchema: z.ZodType<Prisma.GlosarioAggregateArgs> = z
	.object({
		orderBy: z.union([GlosarioOrderByWithRelationInputObjectSchema, GlosarioOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: GlosarioWhereInputObjectSchema.optional(),
		cursor: GlosarioWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z.union([z.literal(true), GlosarioCountAggregateInputObjectSchema]).optional(),
		_min: GlosarioMinAggregateInputObjectSchema.optional(),
		_max: GlosarioMaxAggregateInputObjectSchema.optional(),
		_avg: GlosarioAvgAggregateInputObjectSchema.optional(),
		_sum: GlosarioSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.GlosarioAggregateArgs>;

export const GlosarioAggregateZodSchema = z
	.object({
		orderBy: z.union([GlosarioOrderByWithRelationInputObjectSchema, GlosarioOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: GlosarioWhereInputObjectSchema.optional(),
		cursor: GlosarioWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z.union([z.literal(true), GlosarioCountAggregateInputObjectSchema]).optional(),
		_min: GlosarioMinAggregateInputObjectSchema.optional(),
		_max: GlosarioMaxAggregateInputObjectSchema.optional(),
		_avg: GlosarioAvgAggregateInputObjectSchema.optional(),
		_sum: GlosarioSumAggregateInputObjectSchema.optional(),
	})
	.strict();
