import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { CategoriaScalarFieldEnumSchema } from "./enums/CategoriaScalarFieldEnum.schema.ts";
import { CategoriaAvgAggregateInputObjectSchema as CategoriaAvgAggregateInputObjectSchema } from "./objects/CategoriaAvgAggregateInput.schema.ts";
import { CategoriaCountAggregateInputObjectSchema as CategoriaCountAggregateInputObjectSchema } from "./objects/CategoriaCountAggregateInput.schema.ts";
import { CategoriaMaxAggregateInputObjectSchema as CategoriaMaxAggregateInputObjectSchema } from "./objects/CategoriaMaxAggregateInput.schema.ts";
import { CategoriaMinAggregateInputObjectSchema as CategoriaMinAggregateInputObjectSchema } from "./objects/CategoriaMinAggregateInput.schema.ts";
import { CategoriaOrderByWithAggregationInputObjectSchema as CategoriaOrderByWithAggregationInputObjectSchema } from "./objects/CategoriaOrderByWithAggregationInput.schema.ts";
import { CategoriaScalarWhereWithAggregatesInputObjectSchema as CategoriaScalarWhereWithAggregatesInputObjectSchema } from "./objects/CategoriaScalarWhereWithAggregatesInput.schema.ts";
import { CategoriaSumAggregateInputObjectSchema as CategoriaSumAggregateInputObjectSchema } from "./objects/CategoriaSumAggregateInput.schema.ts";
import { CategoriaWhereInputObjectSchema as CategoriaWhereInputObjectSchema } from "./objects/CategoriaWhereInput.schema.ts";

export const CategoriaGroupBySchema: z.ZodType<Prisma.CategoriaGroupByArgs> = z
	.object({
		where: CategoriaWhereInputObjectSchema.optional(),
		orderBy: z
			.union([
				CategoriaOrderByWithAggregationInputObjectSchema,
				CategoriaOrderByWithAggregationInputObjectSchema.array(),
			])
			.optional(),
		having: CategoriaScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(CategoriaScalarFieldEnumSchema),
		_count: z
			.union([z.literal(true), CategoriaCountAggregateInputObjectSchema])
			.optional(),
		_min: CategoriaMinAggregateInputObjectSchema.optional(),
		_max: CategoriaMaxAggregateInputObjectSchema.optional(),
		_avg: CategoriaAvgAggregateInputObjectSchema.optional(),
		_sum: CategoriaSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.CategoriaGroupByArgs>;

export const CategoriaGroupByZodSchema = z
	.object({
		where: CategoriaWhereInputObjectSchema.optional(),
		orderBy: z
			.union([
				CategoriaOrderByWithAggregationInputObjectSchema,
				CategoriaOrderByWithAggregationInputObjectSchema.array(),
			])
			.optional(),
		having: CategoriaScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(CategoriaScalarFieldEnumSchema),
		_count: z
			.union([z.literal(true), CategoriaCountAggregateInputObjectSchema])
			.optional(),
		_min: CategoriaMinAggregateInputObjectSchema.optional(),
		_max: CategoriaMaxAggregateInputObjectSchema.optional(),
		_avg: CategoriaAvgAggregateInputObjectSchema.optional(),
		_sum: CategoriaSumAggregateInputObjectSchema.optional(),
	})
	.strict();
