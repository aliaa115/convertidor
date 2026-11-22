import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ComentarioScalarFieldEnumSchema } from "./enums/ComentarioScalarFieldEnum.schema.ts";
import { ComentarioAvgAggregateInputObjectSchema as ComentarioAvgAggregateInputObjectSchema } from "./objects/ComentarioAvgAggregateInput.schema.ts";
import { ComentarioCountAggregateInputObjectSchema as ComentarioCountAggregateInputObjectSchema } from "./objects/ComentarioCountAggregateInput.schema.ts";
import { ComentarioMaxAggregateInputObjectSchema as ComentarioMaxAggregateInputObjectSchema } from "./objects/ComentarioMaxAggregateInput.schema.ts";
import { ComentarioMinAggregateInputObjectSchema as ComentarioMinAggregateInputObjectSchema } from "./objects/ComentarioMinAggregateInput.schema.ts";
import { ComentarioOrderByWithAggregationInputObjectSchema as ComentarioOrderByWithAggregationInputObjectSchema } from "./objects/ComentarioOrderByWithAggregationInput.schema.ts";
import { ComentarioScalarWhereWithAggregatesInputObjectSchema as ComentarioScalarWhereWithAggregatesInputObjectSchema } from "./objects/ComentarioScalarWhereWithAggregatesInput.schema.ts";
import { ComentarioSumAggregateInputObjectSchema as ComentarioSumAggregateInputObjectSchema } from "./objects/ComentarioSumAggregateInput.schema.ts";
import { ComentarioWhereInputObjectSchema as ComentarioWhereInputObjectSchema } from "./objects/ComentarioWhereInput.schema.ts";

export const ComentarioGroupBySchema: z.ZodType<Prisma.ComentarioGroupByArgs> = z
	.object({
		where: ComentarioWhereInputObjectSchema.optional(),
		orderBy: z.union([ComentarioOrderByWithAggregationInputObjectSchema, ComentarioOrderByWithAggregationInputObjectSchema.array()]).optional(),
		having: ComentarioScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(ComentarioScalarFieldEnumSchema),
		_count: z.union([z.literal(true), ComentarioCountAggregateInputObjectSchema]).optional(),
		_min: ComentarioMinAggregateInputObjectSchema.optional(),
		_max: ComentarioMaxAggregateInputObjectSchema.optional(),
		_avg: ComentarioAvgAggregateInputObjectSchema.optional(),
		_sum: ComentarioSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.ComentarioGroupByArgs>;

export const ComentarioGroupByZodSchema = z
	.object({
		where: ComentarioWhereInputObjectSchema.optional(),
		orderBy: z.union([ComentarioOrderByWithAggregationInputObjectSchema, ComentarioOrderByWithAggregationInputObjectSchema.array()]).optional(),
		having: ComentarioScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(ComentarioScalarFieldEnumSchema),
		_count: z.union([z.literal(true), ComentarioCountAggregateInputObjectSchema]).optional(),
		_min: ComentarioMinAggregateInputObjectSchema.optional(),
		_max: ComentarioMaxAggregateInputObjectSchema.optional(),
		_avg: ComentarioAvgAggregateInputObjectSchema.optional(),
		_sum: ComentarioSumAggregateInputObjectSchema.optional(),
	})
	.strict();
