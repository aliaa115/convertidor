import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { UsuarioScalarFieldEnumSchema } from "./enums/UsuarioScalarFieldEnum.schema.ts";
import { UsuarioAvgAggregateInputObjectSchema as UsuarioAvgAggregateInputObjectSchema } from "./objects/UsuarioAvgAggregateInput.schema.ts";
import { UsuarioCountAggregateInputObjectSchema as UsuarioCountAggregateInputObjectSchema } from "./objects/UsuarioCountAggregateInput.schema.ts";
import { UsuarioMaxAggregateInputObjectSchema as UsuarioMaxAggregateInputObjectSchema } from "./objects/UsuarioMaxAggregateInput.schema.ts";
import { UsuarioMinAggregateInputObjectSchema as UsuarioMinAggregateInputObjectSchema } from "./objects/UsuarioMinAggregateInput.schema.ts";
import { UsuarioOrderByWithAggregationInputObjectSchema as UsuarioOrderByWithAggregationInputObjectSchema } from "./objects/UsuarioOrderByWithAggregationInput.schema.ts";
import { UsuarioScalarWhereWithAggregatesInputObjectSchema as UsuarioScalarWhereWithAggregatesInputObjectSchema } from "./objects/UsuarioScalarWhereWithAggregatesInput.schema.ts";
import { UsuarioSumAggregateInputObjectSchema as UsuarioSumAggregateInputObjectSchema } from "./objects/UsuarioSumAggregateInput.schema.ts";
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from "./objects/UsuarioWhereInput.schema.ts";

export const UsuarioGroupBySchema: z.ZodType<Prisma.UsuarioGroupByArgs> = z
	.object({
		where: UsuarioWhereInputObjectSchema.optional(),
		orderBy: z.union([UsuarioOrderByWithAggregationInputObjectSchema, UsuarioOrderByWithAggregationInputObjectSchema.array()]).optional(),
		having: UsuarioScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(UsuarioScalarFieldEnumSchema),
		_count: z.union([z.literal(true), UsuarioCountAggregateInputObjectSchema]).optional(),
		_min: UsuarioMinAggregateInputObjectSchema.optional(),
		_max: UsuarioMaxAggregateInputObjectSchema.optional(),
		_avg: UsuarioAvgAggregateInputObjectSchema.optional(),
		_sum: UsuarioSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.UsuarioGroupByArgs>;

export const UsuarioGroupByZodSchema = z
	.object({
		where: UsuarioWhereInputObjectSchema.optional(),
		orderBy: z.union([UsuarioOrderByWithAggregationInputObjectSchema, UsuarioOrderByWithAggregationInputObjectSchema.array()]).optional(),
		having: UsuarioScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(UsuarioScalarFieldEnumSchema),
		_count: z.union([z.literal(true), UsuarioCountAggregateInputObjectSchema]).optional(),
		_min: UsuarioMinAggregateInputObjectSchema.optional(),
		_max: UsuarioMaxAggregateInputObjectSchema.optional(),
		_avg: UsuarioAvgAggregateInputObjectSchema.optional(),
		_sum: UsuarioSumAggregateInputObjectSchema.optional(),
	})
	.strict();
