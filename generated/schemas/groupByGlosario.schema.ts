import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { GlosarioScalarFieldEnumSchema } from "./enums/GlosarioScalarFieldEnum.schema.ts";
import { GlosarioAvgAggregateInputObjectSchema as GlosarioAvgAggregateInputObjectSchema } from "./objects/GlosarioAvgAggregateInput.schema.ts";
import { GlosarioCountAggregateInputObjectSchema as GlosarioCountAggregateInputObjectSchema } from "./objects/GlosarioCountAggregateInput.schema.ts";
import { GlosarioMaxAggregateInputObjectSchema as GlosarioMaxAggregateInputObjectSchema } from "./objects/GlosarioMaxAggregateInput.schema.ts";
import { GlosarioMinAggregateInputObjectSchema as GlosarioMinAggregateInputObjectSchema } from "./objects/GlosarioMinAggregateInput.schema.ts";
import { GlosarioOrderByWithAggregationInputObjectSchema as GlosarioOrderByWithAggregationInputObjectSchema } from "./objects/GlosarioOrderByWithAggregationInput.schema.ts";
import { GlosarioScalarWhereWithAggregatesInputObjectSchema as GlosarioScalarWhereWithAggregatesInputObjectSchema } from "./objects/GlosarioScalarWhereWithAggregatesInput.schema.ts";
import { GlosarioSumAggregateInputObjectSchema as GlosarioSumAggregateInputObjectSchema } from "./objects/GlosarioSumAggregateInput.schema.ts";
import { GlosarioWhereInputObjectSchema as GlosarioWhereInputObjectSchema } from "./objects/GlosarioWhereInput.schema.ts";

export const GlosarioGroupBySchema: z.ZodType<Prisma.GlosarioGroupByArgs> = z
	.object({
		where: GlosarioWhereInputObjectSchema.optional(),
		orderBy: z.union([GlosarioOrderByWithAggregationInputObjectSchema, GlosarioOrderByWithAggregationInputObjectSchema.array()]).optional(),
		having: GlosarioScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(GlosarioScalarFieldEnumSchema),
		_count: z.union([z.literal(true), GlosarioCountAggregateInputObjectSchema]).optional(),
		_min: GlosarioMinAggregateInputObjectSchema.optional(),
		_max: GlosarioMaxAggregateInputObjectSchema.optional(),
		_avg: GlosarioAvgAggregateInputObjectSchema.optional(),
		_sum: GlosarioSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.GlosarioGroupByArgs>;

export const GlosarioGroupByZodSchema = z
	.object({
		where: GlosarioWhereInputObjectSchema.optional(),
		orderBy: z.union([GlosarioOrderByWithAggregationInputObjectSchema, GlosarioOrderByWithAggregationInputObjectSchema.array()]).optional(),
		having: GlosarioScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(GlosarioScalarFieldEnumSchema),
		_count: z.union([z.literal(true), GlosarioCountAggregateInputObjectSchema]).optional(),
		_min: GlosarioMinAggregateInputObjectSchema.optional(),
		_max: GlosarioMaxAggregateInputObjectSchema.optional(),
		_avg: GlosarioAvgAggregateInputObjectSchema.optional(),
		_sum: GlosarioSumAggregateInputObjectSchema.optional(),
	})
	.strict();
