import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { EstadoAvgAggregateInputObjectSchema as EstadoAvgAggregateInputObjectSchema } from "./objects/EstadoAvgAggregateInput.schema.ts";
import { EstadoCountAggregateInputObjectSchema as EstadoCountAggregateInputObjectSchema } from "./objects/EstadoCountAggregateInput.schema.ts";
import { EstadoMaxAggregateInputObjectSchema as EstadoMaxAggregateInputObjectSchema } from "./objects/EstadoMaxAggregateInput.schema.ts";
import { EstadoMinAggregateInputObjectSchema as EstadoMinAggregateInputObjectSchema } from "./objects/EstadoMinAggregateInput.schema.ts";
import { EstadoOrderByWithRelationInputObjectSchema as EstadoOrderByWithRelationInputObjectSchema } from "./objects/EstadoOrderByWithRelationInput.schema.ts";
import { EstadoSumAggregateInputObjectSchema as EstadoSumAggregateInputObjectSchema } from "./objects/EstadoSumAggregateInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./objects/EstadoWhereInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./objects/EstadoWhereUniqueInput.schema.ts";

export const EstadoAggregateSchema: z.ZodType<Prisma.EstadoAggregateArgs> = z
	.object({
		orderBy: z.union([EstadoOrderByWithRelationInputObjectSchema, EstadoOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: EstadoWhereInputObjectSchema.optional(),
		cursor: EstadoWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z.union([z.literal(true), EstadoCountAggregateInputObjectSchema]).optional(),
		_min: EstadoMinAggregateInputObjectSchema.optional(),
		_max: EstadoMaxAggregateInputObjectSchema.optional(),
		_avg: EstadoAvgAggregateInputObjectSchema.optional(),
		_sum: EstadoSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.EstadoAggregateArgs>;

export const EstadoAggregateZodSchema = z
	.object({
		orderBy: z.union([EstadoOrderByWithRelationInputObjectSchema, EstadoOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: EstadoWhereInputObjectSchema.optional(),
		cursor: EstadoWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z.union([z.literal(true), EstadoCountAggregateInputObjectSchema]).optional(),
		_min: EstadoMinAggregateInputObjectSchema.optional(),
		_max: EstadoMaxAggregateInputObjectSchema.optional(),
		_avg: EstadoAvgAggregateInputObjectSchema.optional(),
		_sum: EstadoSumAggregateInputObjectSchema.optional(),
	})
	.strict();
