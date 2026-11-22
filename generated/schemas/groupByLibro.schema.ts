import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { LibroScalarFieldEnumSchema } from "./enums/LibroScalarFieldEnum.schema.ts";
import { LibroAvgAggregateInputObjectSchema as LibroAvgAggregateInputObjectSchema } from "./objects/LibroAvgAggregateInput.schema.ts";
import { LibroCountAggregateInputObjectSchema as LibroCountAggregateInputObjectSchema } from "./objects/LibroCountAggregateInput.schema.ts";
import { LibroMaxAggregateInputObjectSchema as LibroMaxAggregateInputObjectSchema } from "./objects/LibroMaxAggregateInput.schema.ts";
import { LibroMinAggregateInputObjectSchema as LibroMinAggregateInputObjectSchema } from "./objects/LibroMinAggregateInput.schema.ts";
import { LibroOrderByWithAggregationInputObjectSchema as LibroOrderByWithAggregationInputObjectSchema } from "./objects/LibroOrderByWithAggregationInput.schema.ts";
import { LibroScalarWhereWithAggregatesInputObjectSchema as LibroScalarWhereWithAggregatesInputObjectSchema } from "./objects/LibroScalarWhereWithAggregatesInput.schema.ts";
import { LibroSumAggregateInputObjectSchema as LibroSumAggregateInputObjectSchema } from "./objects/LibroSumAggregateInput.schema.ts";
import { LibroWhereInputObjectSchema as LibroWhereInputObjectSchema } from "./objects/LibroWhereInput.schema.ts";

export const LibroGroupBySchema: z.ZodType<Prisma.LibroGroupByArgs> = z
	.object({
		where: LibroWhereInputObjectSchema.optional(),
		orderBy: z
			.union([
				LibroOrderByWithAggregationInputObjectSchema,
				LibroOrderByWithAggregationInputObjectSchema.array(),
			])
			.optional(),
		having: LibroScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(LibroScalarFieldEnumSchema),
		_count: z
			.union([z.literal(true), LibroCountAggregateInputObjectSchema])
			.optional(),
		_min: LibroMinAggregateInputObjectSchema.optional(),
		_max: LibroMaxAggregateInputObjectSchema.optional(),
		_avg: LibroAvgAggregateInputObjectSchema.optional(),
		_sum: LibroSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.LibroGroupByArgs>;

export const LibroGroupByZodSchema = z
	.object({
		where: LibroWhereInputObjectSchema.optional(),
		orderBy: z
			.union([
				LibroOrderByWithAggregationInputObjectSchema,
				LibroOrderByWithAggregationInputObjectSchema.array(),
			])
			.optional(),
		having: LibroScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(LibroScalarFieldEnumSchema),
		_count: z
			.union([z.literal(true), LibroCountAggregateInputObjectSchema])
			.optional(),
		_min: LibroMinAggregateInputObjectSchema.optional(),
		_max: LibroMaxAggregateInputObjectSchema.optional(),
		_avg: LibroAvgAggregateInputObjectSchema.optional(),
		_sum: LibroSumAggregateInputObjectSchema.optional(),
	})
	.strict();
