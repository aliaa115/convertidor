import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { CategoriaAvgAggregateInputObjectSchema as CategoriaAvgAggregateInputObjectSchema } from "./objects/CategoriaAvgAggregateInput.schema.ts";
import { CategoriaCountAggregateInputObjectSchema as CategoriaCountAggregateInputObjectSchema } from "./objects/CategoriaCountAggregateInput.schema.ts";
import { CategoriaMaxAggregateInputObjectSchema as CategoriaMaxAggregateInputObjectSchema } from "./objects/CategoriaMaxAggregateInput.schema.ts";
import { CategoriaMinAggregateInputObjectSchema as CategoriaMinAggregateInputObjectSchema } from "./objects/CategoriaMinAggregateInput.schema.ts";
import { CategoriaOrderByWithRelationInputObjectSchema as CategoriaOrderByWithRelationInputObjectSchema } from "./objects/CategoriaOrderByWithRelationInput.schema.ts";
import { CategoriaSumAggregateInputObjectSchema as CategoriaSumAggregateInputObjectSchema } from "./objects/CategoriaSumAggregateInput.schema.ts";
import { CategoriaWhereInputObjectSchema as CategoriaWhereInputObjectSchema } from "./objects/CategoriaWhereInput.schema.ts";
import { CategoriaWhereUniqueInputObjectSchema as CategoriaWhereUniqueInputObjectSchema } from "./objects/CategoriaWhereUniqueInput.schema.ts";

export const CategoriaAggregateSchema: z.ZodType<Prisma.CategoriaAggregateArgs> =
	z
		.object({
			orderBy: z
				.union([
					CategoriaOrderByWithRelationInputObjectSchema,
					CategoriaOrderByWithRelationInputObjectSchema.array(),
				])
				.optional(),
			where: CategoriaWhereInputObjectSchema.optional(),
			cursor: CategoriaWhereUniqueInputObjectSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
			_count: z
				.union([z.literal(true), CategoriaCountAggregateInputObjectSchema])
				.optional(),
			_min: CategoriaMinAggregateInputObjectSchema.optional(),
			_max: CategoriaMaxAggregateInputObjectSchema.optional(),
			_avg: CategoriaAvgAggregateInputObjectSchema.optional(),
			_sum: CategoriaSumAggregateInputObjectSchema.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.CategoriaAggregateArgs>;

export const CategoriaAggregateZodSchema = z
	.object({
		orderBy: z
			.union([
				CategoriaOrderByWithRelationInputObjectSchema,
				CategoriaOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: CategoriaWhereInputObjectSchema.optional(),
		cursor: CategoriaWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z
			.union([z.literal(true), CategoriaCountAggregateInputObjectSchema])
			.optional(),
		_min: CategoriaMinAggregateInputObjectSchema.optional(),
		_max: CategoriaMaxAggregateInputObjectSchema.optional(),
		_avg: CategoriaAvgAggregateInputObjectSchema.optional(),
		_sum: CategoriaSumAggregateInputObjectSchema.optional(),
	})
	.strict();
