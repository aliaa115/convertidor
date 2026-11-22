import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ParrafoScalarFieldEnumSchema } from "./enums/ParrafoScalarFieldEnum.schema.ts";
import { ParrafoAvgAggregateInputObjectSchema as ParrafoAvgAggregateInputObjectSchema } from "./objects/ParrafoAvgAggregateInput.schema.ts";
import { ParrafoCountAggregateInputObjectSchema as ParrafoCountAggregateInputObjectSchema } from "./objects/ParrafoCountAggregateInput.schema.ts";
import { ParrafoMaxAggregateInputObjectSchema as ParrafoMaxAggregateInputObjectSchema } from "./objects/ParrafoMaxAggregateInput.schema.ts";
import { ParrafoMinAggregateInputObjectSchema as ParrafoMinAggregateInputObjectSchema } from "./objects/ParrafoMinAggregateInput.schema.ts";
import { ParrafoOrderByWithAggregationInputObjectSchema as ParrafoOrderByWithAggregationInputObjectSchema } from "./objects/ParrafoOrderByWithAggregationInput.schema.ts";
import { ParrafoScalarWhereWithAggregatesInputObjectSchema as ParrafoScalarWhereWithAggregatesInputObjectSchema } from "./objects/ParrafoScalarWhereWithAggregatesInput.schema.ts";
import { ParrafoSumAggregateInputObjectSchema as ParrafoSumAggregateInputObjectSchema } from "./objects/ParrafoSumAggregateInput.schema.ts";
import { ParrafoWhereInputObjectSchema as ParrafoWhereInputObjectSchema } from "./objects/ParrafoWhereInput.schema.ts";

export const ParrafoGroupBySchema: z.ZodType<Prisma.ParrafoGroupByArgs> = z
	.object({
		where: ParrafoWhereInputObjectSchema.optional(),
		orderBy: z
			.union([
				ParrafoOrderByWithAggregationInputObjectSchema,
				ParrafoOrderByWithAggregationInputObjectSchema.array(),
			])
			.optional(),
		having: ParrafoScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(ParrafoScalarFieldEnumSchema),
		_count: z
			.union([z.literal(true), ParrafoCountAggregateInputObjectSchema])
			.optional(),
		_min: ParrafoMinAggregateInputObjectSchema.optional(),
		_max: ParrafoMaxAggregateInputObjectSchema.optional(),
		_avg: ParrafoAvgAggregateInputObjectSchema.optional(),
		_sum: ParrafoSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.ParrafoGroupByArgs>;

export const ParrafoGroupByZodSchema = z
	.object({
		where: ParrafoWhereInputObjectSchema.optional(),
		orderBy: z
			.union([
				ParrafoOrderByWithAggregationInputObjectSchema,
				ParrafoOrderByWithAggregationInputObjectSchema.array(),
			])
			.optional(),
		having: ParrafoScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(ParrafoScalarFieldEnumSchema),
		_count: z
			.union([z.literal(true), ParrafoCountAggregateInputObjectSchema])
			.optional(),
		_min: ParrafoMinAggregateInputObjectSchema.optional(),
		_max: ParrafoMaxAggregateInputObjectSchema.optional(),
		_avg: ParrafoAvgAggregateInputObjectSchema.optional(),
		_sum: ParrafoSumAggregateInputObjectSchema.optional(),
	})
	.strict();
