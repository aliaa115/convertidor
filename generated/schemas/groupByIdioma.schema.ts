import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { IdiomaScalarFieldEnumSchema } from "./enums/IdiomaScalarFieldEnum.schema.ts";
import { IdiomaAvgAggregateInputObjectSchema as IdiomaAvgAggregateInputObjectSchema } from "./objects/IdiomaAvgAggregateInput.schema.ts";
import { IdiomaCountAggregateInputObjectSchema as IdiomaCountAggregateInputObjectSchema } from "./objects/IdiomaCountAggregateInput.schema.ts";
import { IdiomaMaxAggregateInputObjectSchema as IdiomaMaxAggregateInputObjectSchema } from "./objects/IdiomaMaxAggregateInput.schema.ts";
import { IdiomaMinAggregateInputObjectSchema as IdiomaMinAggregateInputObjectSchema } from "./objects/IdiomaMinAggregateInput.schema.ts";
import { IdiomaOrderByWithAggregationInputObjectSchema as IdiomaOrderByWithAggregationInputObjectSchema } from "./objects/IdiomaOrderByWithAggregationInput.schema.ts";
import { IdiomaScalarWhereWithAggregatesInputObjectSchema as IdiomaScalarWhereWithAggregatesInputObjectSchema } from "./objects/IdiomaScalarWhereWithAggregatesInput.schema.ts";
import { IdiomaSumAggregateInputObjectSchema as IdiomaSumAggregateInputObjectSchema } from "./objects/IdiomaSumAggregateInput.schema.ts";
import { IdiomaWhereInputObjectSchema as IdiomaWhereInputObjectSchema } from "./objects/IdiomaWhereInput.schema.ts";

export const IdiomaGroupBySchema: z.ZodType<Prisma.IdiomaGroupByArgs> = z
	.object({
		where: IdiomaWhereInputObjectSchema.optional(),
		orderBy: z.union([IdiomaOrderByWithAggregationInputObjectSchema, IdiomaOrderByWithAggregationInputObjectSchema.array()]).optional(),
		having: IdiomaScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(IdiomaScalarFieldEnumSchema),
		_count: z.union([z.literal(true), IdiomaCountAggregateInputObjectSchema]).optional(),
		_min: IdiomaMinAggregateInputObjectSchema.optional(),
		_max: IdiomaMaxAggregateInputObjectSchema.optional(),
		_avg: IdiomaAvgAggregateInputObjectSchema.optional(),
		_sum: IdiomaSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.IdiomaGroupByArgs>;

export const IdiomaGroupByZodSchema = z
	.object({
		where: IdiomaWhereInputObjectSchema.optional(),
		orderBy: z.union([IdiomaOrderByWithAggregationInputObjectSchema, IdiomaOrderByWithAggregationInputObjectSchema.array()]).optional(),
		having: IdiomaScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(IdiomaScalarFieldEnumSchema),
		_count: z.union([z.literal(true), IdiomaCountAggregateInputObjectSchema]).optional(),
		_min: IdiomaMinAggregateInputObjectSchema.optional(),
		_max: IdiomaMaxAggregateInputObjectSchema.optional(),
		_avg: IdiomaAvgAggregateInputObjectSchema.optional(),
		_sum: IdiomaSumAggregateInputObjectSchema.optional(),
	})
	.strict();
