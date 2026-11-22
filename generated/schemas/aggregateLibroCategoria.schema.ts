import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { LibroCategoriaAvgAggregateInputObjectSchema as LibroCategoriaAvgAggregateInputObjectSchema } from "./objects/LibroCategoriaAvgAggregateInput.schema.ts";
import { LibroCategoriaCountAggregateInputObjectSchema as LibroCategoriaCountAggregateInputObjectSchema } from "./objects/LibroCategoriaCountAggregateInput.schema.ts";
import { LibroCategoriaMaxAggregateInputObjectSchema as LibroCategoriaMaxAggregateInputObjectSchema } from "./objects/LibroCategoriaMaxAggregateInput.schema.ts";
import { LibroCategoriaMinAggregateInputObjectSchema as LibroCategoriaMinAggregateInputObjectSchema } from "./objects/LibroCategoriaMinAggregateInput.schema.ts";
import { LibroCategoriaOrderByWithRelationInputObjectSchema as LibroCategoriaOrderByWithRelationInputObjectSchema } from "./objects/LibroCategoriaOrderByWithRelationInput.schema.ts";
import { LibroCategoriaSumAggregateInputObjectSchema as LibroCategoriaSumAggregateInputObjectSchema } from "./objects/LibroCategoriaSumAggregateInput.schema.ts";
import { LibroCategoriaWhereInputObjectSchema as LibroCategoriaWhereInputObjectSchema } from "./objects/LibroCategoriaWhereInput.schema.ts";
import { LibroCategoriaWhereUniqueInputObjectSchema as LibroCategoriaWhereUniqueInputObjectSchema } from "./objects/LibroCategoriaWhereUniqueInput.schema.ts";

export const LibroCategoriaAggregateSchema: z.ZodType<Prisma.LibroCategoriaAggregateArgs> =
	z
		.object({
			orderBy: z
				.union([
					LibroCategoriaOrderByWithRelationInputObjectSchema,
					LibroCategoriaOrderByWithRelationInputObjectSchema.array(),
				])
				.optional(),
			where: LibroCategoriaWhereInputObjectSchema.optional(),
			cursor: LibroCategoriaWhereUniqueInputObjectSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
			_count: z
				.union([z.literal(true), LibroCategoriaCountAggregateInputObjectSchema])
				.optional(),
			_min: LibroCategoriaMinAggregateInputObjectSchema.optional(),
			_max: LibroCategoriaMaxAggregateInputObjectSchema.optional(),
			_avg: LibroCategoriaAvgAggregateInputObjectSchema.optional(),
			_sum: LibroCategoriaSumAggregateInputObjectSchema.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.LibroCategoriaAggregateArgs>;

export const LibroCategoriaAggregateZodSchema = z
	.object({
		orderBy: z
			.union([
				LibroCategoriaOrderByWithRelationInputObjectSchema,
				LibroCategoriaOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: LibroCategoriaWhereInputObjectSchema.optional(),
		cursor: LibroCategoriaWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z
			.union([z.literal(true), LibroCategoriaCountAggregateInputObjectSchema])
			.optional(),
		_min: LibroCategoriaMinAggregateInputObjectSchema.optional(),
		_max: LibroCategoriaMaxAggregateInputObjectSchema.optional(),
		_avg: LibroCategoriaAvgAggregateInputObjectSchema.optional(),
		_sum: LibroCategoriaSumAggregateInputObjectSchema.optional(),
	})
	.strict();
