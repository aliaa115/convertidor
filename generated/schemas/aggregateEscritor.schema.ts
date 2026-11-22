import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { EscritorAvgAggregateInputObjectSchema as EscritorAvgAggregateInputObjectSchema } from "./objects/EscritorAvgAggregateInput.schema.ts";
import { EscritorCountAggregateInputObjectSchema as EscritorCountAggregateInputObjectSchema } from "./objects/EscritorCountAggregateInput.schema.ts";
import { EscritorMaxAggregateInputObjectSchema as EscritorMaxAggregateInputObjectSchema } from "./objects/EscritorMaxAggregateInput.schema.ts";
import { EscritorMinAggregateInputObjectSchema as EscritorMinAggregateInputObjectSchema } from "./objects/EscritorMinAggregateInput.schema.ts";
import { EscritorOrderByWithRelationInputObjectSchema as EscritorOrderByWithRelationInputObjectSchema } from "./objects/EscritorOrderByWithRelationInput.schema.ts";
import { EscritorSumAggregateInputObjectSchema as EscritorSumAggregateInputObjectSchema } from "./objects/EscritorSumAggregateInput.schema.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./objects/EscritorWhereInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./objects/EscritorWhereUniqueInput.schema.ts";

export const EscritorAggregateSchema: z.ZodType<Prisma.EscritorAggregateArgs> = z
	.object({
		orderBy: z.union([EscritorOrderByWithRelationInputObjectSchema, EscritorOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: EscritorWhereInputObjectSchema.optional(),
		cursor: EscritorWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z.union([z.literal(true), EscritorCountAggregateInputObjectSchema]).optional(),
		_min: EscritorMinAggregateInputObjectSchema.optional(),
		_max: EscritorMaxAggregateInputObjectSchema.optional(),
		_avg: EscritorAvgAggregateInputObjectSchema.optional(),
		_sum: EscritorSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.EscritorAggregateArgs>;

export const EscritorAggregateZodSchema = z
	.object({
		orderBy: z.union([EscritorOrderByWithRelationInputObjectSchema, EscritorOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: EscritorWhereInputObjectSchema.optional(),
		cursor: EscritorWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z.union([z.literal(true), EscritorCountAggregateInputObjectSchema]).optional(),
		_min: EscritorMinAggregateInputObjectSchema.optional(),
		_max: EscritorMaxAggregateInputObjectSchema.optional(),
		_avg: EscritorAvgAggregateInputObjectSchema.optional(),
		_sum: EscritorSumAggregateInputObjectSchema.optional(),
	})
	.strict();
