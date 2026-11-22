import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { LibroCategoriaScalarFieldEnumSchema } from "./enums/LibroCategoriaScalarFieldEnum.schema.ts";
import { LibroCategoriaAvgAggregateInputObjectSchema as LibroCategoriaAvgAggregateInputObjectSchema } from "./objects/LibroCategoriaAvgAggregateInput.schema.ts";
import { LibroCategoriaCountAggregateInputObjectSchema as LibroCategoriaCountAggregateInputObjectSchema } from "./objects/LibroCategoriaCountAggregateInput.schema.ts";
import { LibroCategoriaMaxAggregateInputObjectSchema as LibroCategoriaMaxAggregateInputObjectSchema } from "./objects/LibroCategoriaMaxAggregateInput.schema.ts";
import { LibroCategoriaMinAggregateInputObjectSchema as LibroCategoriaMinAggregateInputObjectSchema } from "./objects/LibroCategoriaMinAggregateInput.schema.ts";
import { LibroCategoriaOrderByWithAggregationInputObjectSchema as LibroCategoriaOrderByWithAggregationInputObjectSchema } from "./objects/LibroCategoriaOrderByWithAggregationInput.schema.ts";
import { LibroCategoriaScalarWhereWithAggregatesInputObjectSchema as LibroCategoriaScalarWhereWithAggregatesInputObjectSchema } from "./objects/LibroCategoriaScalarWhereWithAggregatesInput.schema.ts";
import { LibroCategoriaSumAggregateInputObjectSchema as LibroCategoriaSumAggregateInputObjectSchema } from "./objects/LibroCategoriaSumAggregateInput.schema.ts";
import { LibroCategoriaWhereInputObjectSchema as LibroCategoriaWhereInputObjectSchema } from "./objects/LibroCategoriaWhereInput.schema.ts";

export const LibroCategoriaGroupBySchema: z.ZodType<Prisma.LibroCategoriaGroupByArgs> = z
	.object({
		where: LibroCategoriaWhereInputObjectSchema.optional(),
		orderBy: z.union([LibroCategoriaOrderByWithAggregationInputObjectSchema, LibroCategoriaOrderByWithAggregationInputObjectSchema.array()]).optional(),
		having: LibroCategoriaScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(LibroCategoriaScalarFieldEnumSchema),
		_count: z.union([z.literal(true), LibroCategoriaCountAggregateInputObjectSchema]).optional(),
		_min: LibroCategoriaMinAggregateInputObjectSchema.optional(),
		_max: LibroCategoriaMaxAggregateInputObjectSchema.optional(),
		_avg: LibroCategoriaAvgAggregateInputObjectSchema.optional(),
		_sum: LibroCategoriaSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.LibroCategoriaGroupByArgs>;

export const LibroCategoriaGroupByZodSchema = z
	.object({
		where: LibroCategoriaWhereInputObjectSchema.optional(),
		orderBy: z.union([LibroCategoriaOrderByWithAggregationInputObjectSchema, LibroCategoriaOrderByWithAggregationInputObjectSchema.array()]).optional(),
		having: LibroCategoriaScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(LibroCategoriaScalarFieldEnumSchema),
		_count: z.union([z.literal(true), LibroCategoriaCountAggregateInputObjectSchema]).optional(),
		_min: LibroCategoriaMinAggregateInputObjectSchema.optional(),
		_max: LibroCategoriaMaxAggregateInputObjectSchema.optional(),
		_avg: LibroCategoriaAvgAggregateInputObjectSchema.optional(),
		_sum: LibroCategoriaSumAggregateInputObjectSchema.optional(),
	})
	.strict();
