import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { CapituloAvgAggregateInputObjectSchema as CapituloAvgAggregateInputObjectSchema } from "./objects/CapituloAvgAggregateInput.schema.ts";
import { CapituloCountAggregateInputObjectSchema as CapituloCountAggregateInputObjectSchema } from "./objects/CapituloCountAggregateInput.schema.ts";
import { CapituloMaxAggregateInputObjectSchema as CapituloMaxAggregateInputObjectSchema } from "./objects/CapituloMaxAggregateInput.schema.ts";
import { CapituloMinAggregateInputObjectSchema as CapituloMinAggregateInputObjectSchema } from "./objects/CapituloMinAggregateInput.schema.ts";
import { CapituloOrderByWithRelationInputObjectSchema as CapituloOrderByWithRelationInputObjectSchema } from "./objects/CapituloOrderByWithRelationInput.schema.ts";
import { CapituloSumAggregateInputObjectSchema as CapituloSumAggregateInputObjectSchema } from "./objects/CapituloSumAggregateInput.schema.ts";
import { CapituloWhereInputObjectSchema as CapituloWhereInputObjectSchema } from "./objects/CapituloWhereInput.schema.ts";
import { CapituloWhereUniqueInputObjectSchema as CapituloWhereUniqueInputObjectSchema } from "./objects/CapituloWhereUniqueInput.schema.ts";

export const CapituloAggregateSchema: z.ZodType<Prisma.CapituloAggregateArgs> = z
	.object({
		orderBy: z.union([CapituloOrderByWithRelationInputObjectSchema, CapituloOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: CapituloWhereInputObjectSchema.optional(),
		cursor: CapituloWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z.union([z.literal(true), CapituloCountAggregateInputObjectSchema]).optional(),
		_min: CapituloMinAggregateInputObjectSchema.optional(),
		_max: CapituloMaxAggregateInputObjectSchema.optional(),
		_avg: CapituloAvgAggregateInputObjectSchema.optional(),
		_sum: CapituloSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.CapituloAggregateArgs>;

export const CapituloAggregateZodSchema = z
	.object({
		orderBy: z.union([CapituloOrderByWithRelationInputObjectSchema, CapituloOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: CapituloWhereInputObjectSchema.optional(),
		cursor: CapituloWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z.union([z.literal(true), CapituloCountAggregateInputObjectSchema]).optional(),
		_min: CapituloMinAggregateInputObjectSchema.optional(),
		_max: CapituloMaxAggregateInputObjectSchema.optional(),
		_avg: CapituloAvgAggregateInputObjectSchema.optional(),
		_sum: CapituloSumAggregateInputObjectSchema.optional(),
	})
	.strict();
