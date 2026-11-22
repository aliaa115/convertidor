import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { UsuarioAvgAggregateInputObjectSchema as UsuarioAvgAggregateInputObjectSchema } from "./objects/UsuarioAvgAggregateInput.schema.ts";
import { UsuarioCountAggregateInputObjectSchema as UsuarioCountAggregateInputObjectSchema } from "./objects/UsuarioCountAggregateInput.schema.ts";
import { UsuarioMaxAggregateInputObjectSchema as UsuarioMaxAggregateInputObjectSchema } from "./objects/UsuarioMaxAggregateInput.schema.ts";
import { UsuarioMinAggregateInputObjectSchema as UsuarioMinAggregateInputObjectSchema } from "./objects/UsuarioMinAggregateInput.schema.ts";
import { UsuarioOrderByWithRelationInputObjectSchema as UsuarioOrderByWithRelationInputObjectSchema } from "./objects/UsuarioOrderByWithRelationInput.schema.ts";
import { UsuarioSumAggregateInputObjectSchema as UsuarioSumAggregateInputObjectSchema } from "./objects/UsuarioSumAggregateInput.schema.ts";
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from "./objects/UsuarioWhereInput.schema.ts";
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from "./objects/UsuarioWhereUniqueInput.schema.ts";

export const UsuarioAggregateSchema: z.ZodType<Prisma.UsuarioAggregateArgs> = z
	.object({
		orderBy: z
			.union([
				UsuarioOrderByWithRelationInputObjectSchema,
				UsuarioOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: UsuarioWhereInputObjectSchema.optional(),
		cursor: UsuarioWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z
			.union([z.literal(true), UsuarioCountAggregateInputObjectSchema])
			.optional(),
		_min: UsuarioMinAggregateInputObjectSchema.optional(),
		_max: UsuarioMaxAggregateInputObjectSchema.optional(),
		_avg: UsuarioAvgAggregateInputObjectSchema.optional(),
		_sum: UsuarioSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.UsuarioAggregateArgs>;

export const UsuarioAggregateZodSchema = z
	.object({
		orderBy: z
			.union([
				UsuarioOrderByWithRelationInputObjectSchema,
				UsuarioOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: UsuarioWhereInputObjectSchema.optional(),
		cursor: UsuarioWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z
			.union([z.literal(true), UsuarioCountAggregateInputObjectSchema])
			.optional(),
		_min: UsuarioMinAggregateInputObjectSchema.optional(),
		_max: UsuarioMaxAggregateInputObjectSchema.optional(),
		_avg: UsuarioAvgAggregateInputObjectSchema.optional(),
		_sum: UsuarioSumAggregateInputObjectSchema.optional(),
	})
	.strict();
