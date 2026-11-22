import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { EscritorScalarFieldEnumSchema } from "./enums/EscritorScalarFieldEnum.schema.ts";
import { EscritorAvgAggregateInputObjectSchema as EscritorAvgAggregateInputObjectSchema } from "./objects/EscritorAvgAggregateInput.schema.ts";
import { EscritorCountAggregateInputObjectSchema as EscritorCountAggregateInputObjectSchema } from "./objects/EscritorCountAggregateInput.schema.ts";
import { EscritorMaxAggregateInputObjectSchema as EscritorMaxAggregateInputObjectSchema } from "./objects/EscritorMaxAggregateInput.schema.ts";
import { EscritorMinAggregateInputObjectSchema as EscritorMinAggregateInputObjectSchema } from "./objects/EscritorMinAggregateInput.schema.ts";
import { EscritorOrderByWithAggregationInputObjectSchema as EscritorOrderByWithAggregationInputObjectSchema } from "./objects/EscritorOrderByWithAggregationInput.schema.ts";
import { EscritorScalarWhereWithAggregatesInputObjectSchema as EscritorScalarWhereWithAggregatesInputObjectSchema } from "./objects/EscritorScalarWhereWithAggregatesInput.schema.ts";
import { EscritorSumAggregateInputObjectSchema as EscritorSumAggregateInputObjectSchema } from "./objects/EscritorSumAggregateInput.schema.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./objects/EscritorWhereInput.schema.ts";

export const EscritorGroupBySchema: z.ZodType<Prisma.EscritorGroupByArgs> = z
	.object({
		where: EscritorWhereInputObjectSchema.optional(),
		orderBy: z
			.union([
				EscritorOrderByWithAggregationInputObjectSchema,
				EscritorOrderByWithAggregationInputObjectSchema.array(),
			])
			.optional(),
		having: EscritorScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(EscritorScalarFieldEnumSchema),
		_count: z
			.union([z.literal(true), EscritorCountAggregateInputObjectSchema])
			.optional(),
		_min: EscritorMinAggregateInputObjectSchema.optional(),
		_max: EscritorMaxAggregateInputObjectSchema.optional(),
		_avg: EscritorAvgAggregateInputObjectSchema.optional(),
		_sum: EscritorSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.EscritorGroupByArgs>;

export const EscritorGroupByZodSchema = z
	.object({
		where: EscritorWhereInputObjectSchema.optional(),
		orderBy: z
			.union([
				EscritorOrderByWithAggregationInputObjectSchema,
				EscritorOrderByWithAggregationInputObjectSchema.array(),
			])
			.optional(),
		having: EscritorScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(EscritorScalarFieldEnumSchema),
		_count: z
			.union([z.literal(true), EscritorCountAggregateInputObjectSchema])
			.optional(),
		_min: EscritorMinAggregateInputObjectSchema.optional(),
		_max: EscritorMaxAggregateInputObjectSchema.optional(),
		_avg: EscritorAvgAggregateInputObjectSchema.optional(),
		_sum: EscritorSumAggregateInputObjectSchema.optional(),
	})
	.strict();
