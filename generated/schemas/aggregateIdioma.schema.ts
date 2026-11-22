import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { IdiomaAvgAggregateInputObjectSchema as IdiomaAvgAggregateInputObjectSchema } from "./objects/IdiomaAvgAggregateInput.schema.ts";
import { IdiomaCountAggregateInputObjectSchema as IdiomaCountAggregateInputObjectSchema } from "./objects/IdiomaCountAggregateInput.schema.ts";
import { IdiomaMaxAggregateInputObjectSchema as IdiomaMaxAggregateInputObjectSchema } from "./objects/IdiomaMaxAggregateInput.schema.ts";
import { IdiomaMinAggregateInputObjectSchema as IdiomaMinAggregateInputObjectSchema } from "./objects/IdiomaMinAggregateInput.schema.ts";
import { IdiomaOrderByWithRelationInputObjectSchema as IdiomaOrderByWithRelationInputObjectSchema } from "./objects/IdiomaOrderByWithRelationInput.schema.ts";
import { IdiomaSumAggregateInputObjectSchema as IdiomaSumAggregateInputObjectSchema } from "./objects/IdiomaSumAggregateInput.schema.ts";
import { IdiomaWhereInputObjectSchema as IdiomaWhereInputObjectSchema } from "./objects/IdiomaWhereInput.schema.ts";
import { IdiomaWhereUniqueInputObjectSchema as IdiomaWhereUniqueInputObjectSchema } from "./objects/IdiomaWhereUniqueInput.schema.ts";

export const IdiomaAggregateSchema: z.ZodType<Prisma.IdiomaAggregateArgs> = z
	.object({
		orderBy: z
			.union([
				IdiomaOrderByWithRelationInputObjectSchema,
				IdiomaOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: IdiomaWhereInputObjectSchema.optional(),
		cursor: IdiomaWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z
			.union([z.literal(true), IdiomaCountAggregateInputObjectSchema])
			.optional(),
		_min: IdiomaMinAggregateInputObjectSchema.optional(),
		_max: IdiomaMaxAggregateInputObjectSchema.optional(),
		_avg: IdiomaAvgAggregateInputObjectSchema.optional(),
		_sum: IdiomaSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.IdiomaAggregateArgs>;

export const IdiomaAggregateZodSchema = z
	.object({
		orderBy: z
			.union([
				IdiomaOrderByWithRelationInputObjectSchema,
				IdiomaOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: IdiomaWhereInputObjectSchema.optional(),
		cursor: IdiomaWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z
			.union([z.literal(true), IdiomaCountAggregateInputObjectSchema])
			.optional(),
		_min: IdiomaMinAggregateInputObjectSchema.optional(),
		_max: IdiomaMaxAggregateInputObjectSchema.optional(),
		_avg: IdiomaAvgAggregateInputObjectSchema.optional(),
		_sum: IdiomaSumAggregateInputObjectSchema.optional(),
	})
	.strict();
