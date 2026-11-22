import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ParrafoAvgAggregateInputObjectSchema as ParrafoAvgAggregateInputObjectSchema } from "./objects/ParrafoAvgAggregateInput.schema.ts";
import { ParrafoCountAggregateInputObjectSchema as ParrafoCountAggregateInputObjectSchema } from "./objects/ParrafoCountAggregateInput.schema.ts";
import { ParrafoMaxAggregateInputObjectSchema as ParrafoMaxAggregateInputObjectSchema } from "./objects/ParrafoMaxAggregateInput.schema.ts";
import { ParrafoMinAggregateInputObjectSchema as ParrafoMinAggregateInputObjectSchema } from "./objects/ParrafoMinAggregateInput.schema.ts";
import { ParrafoOrderByWithRelationInputObjectSchema as ParrafoOrderByWithRelationInputObjectSchema } from "./objects/ParrafoOrderByWithRelationInput.schema.ts";
import { ParrafoSumAggregateInputObjectSchema as ParrafoSumAggregateInputObjectSchema } from "./objects/ParrafoSumAggregateInput.schema.ts";
import { ParrafoWhereInputObjectSchema as ParrafoWhereInputObjectSchema } from "./objects/ParrafoWhereInput.schema.ts";
import { ParrafoWhereUniqueInputObjectSchema as ParrafoWhereUniqueInputObjectSchema } from "./objects/ParrafoWhereUniqueInput.schema.ts";

export const ParrafoAggregateSchema: z.ZodType<Prisma.ParrafoAggregateArgs> = z
	.object({
		orderBy: z
			.union([
				ParrafoOrderByWithRelationInputObjectSchema,
				ParrafoOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: ParrafoWhereInputObjectSchema.optional(),
		cursor: ParrafoWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z
			.union([z.literal(true), ParrafoCountAggregateInputObjectSchema])
			.optional(),
		_min: ParrafoMinAggregateInputObjectSchema.optional(),
		_max: ParrafoMaxAggregateInputObjectSchema.optional(),
		_avg: ParrafoAvgAggregateInputObjectSchema.optional(),
		_sum: ParrafoSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.ParrafoAggregateArgs>;

export const ParrafoAggregateZodSchema = z
	.object({
		orderBy: z
			.union([
				ParrafoOrderByWithRelationInputObjectSchema,
				ParrafoOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: ParrafoWhereInputObjectSchema.optional(),
		cursor: ParrafoWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z
			.union([z.literal(true), ParrafoCountAggregateInputObjectSchema])
			.optional(),
		_min: ParrafoMinAggregateInputObjectSchema.optional(),
		_max: ParrafoMaxAggregateInputObjectSchema.optional(),
		_avg: ParrafoAvgAggregateInputObjectSchema.optional(),
		_sum: ParrafoSumAggregateInputObjectSchema.optional(),
	})
	.strict();
