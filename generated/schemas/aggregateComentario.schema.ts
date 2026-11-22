import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ComentarioAvgAggregateInputObjectSchema as ComentarioAvgAggregateInputObjectSchema } from "./objects/ComentarioAvgAggregateInput.schema.ts";
import { ComentarioCountAggregateInputObjectSchema as ComentarioCountAggregateInputObjectSchema } from "./objects/ComentarioCountAggregateInput.schema.ts";
import { ComentarioMaxAggregateInputObjectSchema as ComentarioMaxAggregateInputObjectSchema } from "./objects/ComentarioMaxAggregateInput.schema.ts";
import { ComentarioMinAggregateInputObjectSchema as ComentarioMinAggregateInputObjectSchema } from "./objects/ComentarioMinAggregateInput.schema.ts";
import { ComentarioOrderByWithRelationInputObjectSchema as ComentarioOrderByWithRelationInputObjectSchema } from "./objects/ComentarioOrderByWithRelationInput.schema.ts";
import { ComentarioSumAggregateInputObjectSchema as ComentarioSumAggregateInputObjectSchema } from "./objects/ComentarioSumAggregateInput.schema.ts";
import { ComentarioWhereInputObjectSchema as ComentarioWhereInputObjectSchema } from "./objects/ComentarioWhereInput.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./objects/ComentarioWhereUniqueInput.schema.ts";

export const ComentarioAggregateSchema: z.ZodType<Prisma.ComentarioAggregateArgs> = z
	.object({
		orderBy: z.union([ComentarioOrderByWithRelationInputObjectSchema, ComentarioOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: ComentarioWhereInputObjectSchema.optional(),
		cursor: ComentarioWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z.union([z.literal(true), ComentarioCountAggregateInputObjectSchema]).optional(),
		_min: ComentarioMinAggregateInputObjectSchema.optional(),
		_max: ComentarioMaxAggregateInputObjectSchema.optional(),
		_avg: ComentarioAvgAggregateInputObjectSchema.optional(),
		_sum: ComentarioSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.ComentarioAggregateArgs>;

export const ComentarioAggregateZodSchema = z
	.object({
		orderBy: z.union([ComentarioOrderByWithRelationInputObjectSchema, ComentarioOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: ComentarioWhereInputObjectSchema.optional(),
		cursor: ComentarioWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z.union([z.literal(true), ComentarioCountAggregateInputObjectSchema]).optional(),
		_min: ComentarioMinAggregateInputObjectSchema.optional(),
		_max: ComentarioMaxAggregateInputObjectSchema.optional(),
		_avg: ComentarioAvgAggregateInputObjectSchema.optional(),
		_sum: ComentarioSumAggregateInputObjectSchema.optional(),
	})
	.strict();
