import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { CapituloScalarFieldEnumSchema } from "./enums/CapituloScalarFieldEnum.schema.ts";
import { CapituloAvgAggregateInputObjectSchema as CapituloAvgAggregateInputObjectSchema } from "./objects/CapituloAvgAggregateInput.schema.ts";
import { CapituloCountAggregateInputObjectSchema as CapituloCountAggregateInputObjectSchema } from "./objects/CapituloCountAggregateInput.schema.ts";
import { CapituloMaxAggregateInputObjectSchema as CapituloMaxAggregateInputObjectSchema } from "./objects/CapituloMaxAggregateInput.schema.ts";
import { CapituloMinAggregateInputObjectSchema as CapituloMinAggregateInputObjectSchema } from "./objects/CapituloMinAggregateInput.schema.ts";
import { CapituloOrderByWithAggregationInputObjectSchema as CapituloOrderByWithAggregationInputObjectSchema } from "./objects/CapituloOrderByWithAggregationInput.schema.ts";
import { CapituloScalarWhereWithAggregatesInputObjectSchema as CapituloScalarWhereWithAggregatesInputObjectSchema } from "./objects/CapituloScalarWhereWithAggregatesInput.schema.ts";
import { CapituloSumAggregateInputObjectSchema as CapituloSumAggregateInputObjectSchema } from "./objects/CapituloSumAggregateInput.schema.ts";
import { CapituloWhereInputObjectSchema as CapituloWhereInputObjectSchema } from "./objects/CapituloWhereInput.schema.ts";

export const CapituloGroupBySchema: z.ZodType<Prisma.CapituloGroupByArgs> = z
	.object({
		where: CapituloWhereInputObjectSchema.optional(),
		orderBy: z.union([CapituloOrderByWithAggregationInputObjectSchema, CapituloOrderByWithAggregationInputObjectSchema.array()]).optional(),
		having: CapituloScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(CapituloScalarFieldEnumSchema),
		_count: z.union([z.literal(true), CapituloCountAggregateInputObjectSchema]).optional(),
		_min: CapituloMinAggregateInputObjectSchema.optional(),
		_max: CapituloMaxAggregateInputObjectSchema.optional(),
		_avg: CapituloAvgAggregateInputObjectSchema.optional(),
		_sum: CapituloSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.CapituloGroupByArgs>;

export const CapituloGroupByZodSchema = z
	.object({
		where: CapituloWhereInputObjectSchema.optional(),
		orderBy: z.union([CapituloOrderByWithAggregationInputObjectSchema, CapituloOrderByWithAggregationInputObjectSchema.array()]).optional(),
		having: CapituloScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(CapituloScalarFieldEnumSchema),
		_count: z.union([z.literal(true), CapituloCountAggregateInputObjectSchema]).optional(),
		_min: CapituloMinAggregateInputObjectSchema.optional(),
		_max: CapituloMaxAggregateInputObjectSchema.optional(),
		_avg: CapituloAvgAggregateInputObjectSchema.optional(),
		_sum: CapituloSumAggregateInputObjectSchema.optional(),
	})
	.strict();
