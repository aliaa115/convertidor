import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { SeguirUsuarioScalarFieldEnumSchema } from "./enums/SeguirUsuarioScalarFieldEnum.schema.ts";
import { SeguirUsuarioAvgAggregateInputObjectSchema as SeguirUsuarioAvgAggregateInputObjectSchema } from "./objects/SeguirUsuarioAvgAggregateInput.schema.ts";
import { SeguirUsuarioCountAggregateInputObjectSchema as SeguirUsuarioCountAggregateInputObjectSchema } from "./objects/SeguirUsuarioCountAggregateInput.schema.ts";
import { SeguirUsuarioMaxAggregateInputObjectSchema as SeguirUsuarioMaxAggregateInputObjectSchema } from "./objects/SeguirUsuarioMaxAggregateInput.schema.ts";
import { SeguirUsuarioMinAggregateInputObjectSchema as SeguirUsuarioMinAggregateInputObjectSchema } from "./objects/SeguirUsuarioMinAggregateInput.schema.ts";
import { SeguirUsuarioOrderByWithAggregationInputObjectSchema as SeguirUsuarioOrderByWithAggregationInputObjectSchema } from "./objects/SeguirUsuarioOrderByWithAggregationInput.schema.ts";
import { SeguirUsuarioScalarWhereWithAggregatesInputObjectSchema as SeguirUsuarioScalarWhereWithAggregatesInputObjectSchema } from "./objects/SeguirUsuarioScalarWhereWithAggregatesInput.schema.ts";
import { SeguirUsuarioSumAggregateInputObjectSchema as SeguirUsuarioSumAggregateInputObjectSchema } from "./objects/SeguirUsuarioSumAggregateInput.schema.ts";
import { SeguirUsuarioWhereInputObjectSchema as SeguirUsuarioWhereInputObjectSchema } from "./objects/SeguirUsuarioWhereInput.schema.ts";

export const SeguirUsuarioGroupBySchema: z.ZodType<Prisma.SeguirUsuarioGroupByArgs> = z
	.object({
		where: SeguirUsuarioWhereInputObjectSchema.optional(),
		orderBy: z.union([SeguirUsuarioOrderByWithAggregationInputObjectSchema, SeguirUsuarioOrderByWithAggregationInputObjectSchema.array()]).optional(),
		having: SeguirUsuarioScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(SeguirUsuarioScalarFieldEnumSchema),
		_count: z.union([z.literal(true), SeguirUsuarioCountAggregateInputObjectSchema]).optional(),
		_min: SeguirUsuarioMinAggregateInputObjectSchema.optional(),
		_max: SeguirUsuarioMaxAggregateInputObjectSchema.optional(),
		_avg: SeguirUsuarioAvgAggregateInputObjectSchema.optional(),
		_sum: SeguirUsuarioSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.SeguirUsuarioGroupByArgs>;

export const SeguirUsuarioGroupByZodSchema = z
	.object({
		where: SeguirUsuarioWhereInputObjectSchema.optional(),
		orderBy: z.union([SeguirUsuarioOrderByWithAggregationInputObjectSchema, SeguirUsuarioOrderByWithAggregationInputObjectSchema.array()]).optional(),
		having: SeguirUsuarioScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(SeguirUsuarioScalarFieldEnumSchema),
		_count: z.union([z.literal(true), SeguirUsuarioCountAggregateInputObjectSchema]).optional(),
		_min: SeguirUsuarioMinAggregateInputObjectSchema.optional(),
		_max: SeguirUsuarioMaxAggregateInputObjectSchema.optional(),
		_avg: SeguirUsuarioAvgAggregateInputObjectSchema.optional(),
		_sum: SeguirUsuarioSumAggregateInputObjectSchema.optional(),
	})
	.strict();
