import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { EstadoScalarFieldEnumSchema } from "./enums/EstadoScalarFieldEnum.schema.ts";
import { EstadoAvgAggregateInputObjectSchema as EstadoAvgAggregateInputObjectSchema } from "./objects/EstadoAvgAggregateInput.schema.ts";
import { EstadoCountAggregateInputObjectSchema as EstadoCountAggregateInputObjectSchema } from "./objects/EstadoCountAggregateInput.schema.ts";
import { EstadoMaxAggregateInputObjectSchema as EstadoMaxAggregateInputObjectSchema } from "./objects/EstadoMaxAggregateInput.schema.ts";
import { EstadoMinAggregateInputObjectSchema as EstadoMinAggregateInputObjectSchema } from "./objects/EstadoMinAggregateInput.schema.ts";
import { EstadoOrderByWithAggregationInputObjectSchema as EstadoOrderByWithAggregationInputObjectSchema } from "./objects/EstadoOrderByWithAggregationInput.schema.ts";
import { EstadoScalarWhereWithAggregatesInputObjectSchema as EstadoScalarWhereWithAggregatesInputObjectSchema } from "./objects/EstadoScalarWhereWithAggregatesInput.schema.ts";
import { EstadoSumAggregateInputObjectSchema as EstadoSumAggregateInputObjectSchema } from "./objects/EstadoSumAggregateInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./objects/EstadoWhereInput.schema.ts";

export const EstadoGroupBySchema: z.ZodType<Prisma.EstadoGroupByArgs> = z
	.object({
		where: EstadoWhereInputObjectSchema.optional(),
		orderBy: z
			.union([
				EstadoOrderByWithAggregationInputObjectSchema,
				EstadoOrderByWithAggregationInputObjectSchema.array(),
			])
			.optional(),
		having: EstadoScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(EstadoScalarFieldEnumSchema),
		_count: z
			.union([z.literal(true), EstadoCountAggregateInputObjectSchema])
			.optional(),
		_min: EstadoMinAggregateInputObjectSchema.optional(),
		_max: EstadoMaxAggregateInputObjectSchema.optional(),
		_avg: EstadoAvgAggregateInputObjectSchema.optional(),
		_sum: EstadoSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.EstadoGroupByArgs>;

export const EstadoGroupByZodSchema = z
	.object({
		where: EstadoWhereInputObjectSchema.optional(),
		orderBy: z
			.union([
				EstadoOrderByWithAggregationInputObjectSchema,
				EstadoOrderByWithAggregationInputObjectSchema.array(),
			])
			.optional(),
		having: EstadoScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(EstadoScalarFieldEnumSchema),
		_count: z
			.union([z.literal(true), EstadoCountAggregateInputObjectSchema])
			.optional(),
		_min: EstadoMinAggregateInputObjectSchema.optional(),
		_max: EstadoMaxAggregateInputObjectSchema.optional(),
		_avg: EstadoAvgAggregateInputObjectSchema.optional(),
		_sum: EstadoSumAggregateInputObjectSchema.optional(),
	})
	.strict();
