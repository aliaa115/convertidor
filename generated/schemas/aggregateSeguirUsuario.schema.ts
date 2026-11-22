import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { SeguirUsuarioAvgAggregateInputObjectSchema as SeguirUsuarioAvgAggregateInputObjectSchema } from "./objects/SeguirUsuarioAvgAggregateInput.schema.ts";
import { SeguirUsuarioCountAggregateInputObjectSchema as SeguirUsuarioCountAggregateInputObjectSchema } from "./objects/SeguirUsuarioCountAggregateInput.schema.ts";
import { SeguirUsuarioMaxAggregateInputObjectSchema as SeguirUsuarioMaxAggregateInputObjectSchema } from "./objects/SeguirUsuarioMaxAggregateInput.schema.ts";
import { SeguirUsuarioMinAggregateInputObjectSchema as SeguirUsuarioMinAggregateInputObjectSchema } from "./objects/SeguirUsuarioMinAggregateInput.schema.ts";
import { SeguirUsuarioOrderByWithRelationInputObjectSchema as SeguirUsuarioOrderByWithRelationInputObjectSchema } from "./objects/SeguirUsuarioOrderByWithRelationInput.schema.ts";
import { SeguirUsuarioSumAggregateInputObjectSchema as SeguirUsuarioSumAggregateInputObjectSchema } from "./objects/SeguirUsuarioSumAggregateInput.schema.ts";
import { SeguirUsuarioWhereInputObjectSchema as SeguirUsuarioWhereInputObjectSchema } from "./objects/SeguirUsuarioWhereInput.schema.ts";
import { SeguirUsuarioWhereUniqueInputObjectSchema as SeguirUsuarioWhereUniqueInputObjectSchema } from "./objects/SeguirUsuarioWhereUniqueInput.schema.ts";

export const SeguirUsuarioAggregateSchema: z.ZodType<Prisma.SeguirUsuarioAggregateArgs> = z
	.object({
		orderBy: z.union([SeguirUsuarioOrderByWithRelationInputObjectSchema, SeguirUsuarioOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: SeguirUsuarioWhereInputObjectSchema.optional(),
		cursor: SeguirUsuarioWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z.union([z.literal(true), SeguirUsuarioCountAggregateInputObjectSchema]).optional(),
		_min: SeguirUsuarioMinAggregateInputObjectSchema.optional(),
		_max: SeguirUsuarioMaxAggregateInputObjectSchema.optional(),
		_avg: SeguirUsuarioAvgAggregateInputObjectSchema.optional(),
		_sum: SeguirUsuarioSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.SeguirUsuarioAggregateArgs>;

export const SeguirUsuarioAggregateZodSchema = z
	.object({
		orderBy: z.union([SeguirUsuarioOrderByWithRelationInputObjectSchema, SeguirUsuarioOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: SeguirUsuarioWhereInputObjectSchema.optional(),
		cursor: SeguirUsuarioWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z.union([z.literal(true), SeguirUsuarioCountAggregateInputObjectSchema]).optional(),
		_min: SeguirUsuarioMinAggregateInputObjectSchema.optional(),
		_max: SeguirUsuarioMaxAggregateInputObjectSchema.optional(),
		_avg: SeguirUsuarioAvgAggregateInputObjectSchema.optional(),
		_sum: SeguirUsuarioSumAggregateInputObjectSchema.optional(),
	})
	.strict();
