import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ListaLibroScalarFieldEnumSchema } from "./enums/ListaLibroScalarFieldEnum.schema.ts";
import { ListaLibroAvgAggregateInputObjectSchema as ListaLibroAvgAggregateInputObjectSchema } from "./objects/ListaLibroAvgAggregateInput.schema.ts";
import { ListaLibroCountAggregateInputObjectSchema as ListaLibroCountAggregateInputObjectSchema } from "./objects/ListaLibroCountAggregateInput.schema.ts";
import { ListaLibroMaxAggregateInputObjectSchema as ListaLibroMaxAggregateInputObjectSchema } from "./objects/ListaLibroMaxAggregateInput.schema.ts";
import { ListaLibroMinAggregateInputObjectSchema as ListaLibroMinAggregateInputObjectSchema } from "./objects/ListaLibroMinAggregateInput.schema.ts";
import { ListaLibroOrderByWithAggregationInputObjectSchema as ListaLibroOrderByWithAggregationInputObjectSchema } from "./objects/ListaLibroOrderByWithAggregationInput.schema.ts";
import { ListaLibroScalarWhereWithAggregatesInputObjectSchema as ListaLibroScalarWhereWithAggregatesInputObjectSchema } from "./objects/ListaLibroScalarWhereWithAggregatesInput.schema.ts";
import { ListaLibroSumAggregateInputObjectSchema as ListaLibroSumAggregateInputObjectSchema } from "./objects/ListaLibroSumAggregateInput.schema.ts";
import { ListaLibroWhereInputObjectSchema as ListaLibroWhereInputObjectSchema } from "./objects/ListaLibroWhereInput.schema.ts";

export const ListaLibroGroupBySchema: z.ZodType<Prisma.ListaLibroGroupByArgs> = z
	.object({
		where: ListaLibroWhereInputObjectSchema.optional(),
		orderBy: z.union([ListaLibroOrderByWithAggregationInputObjectSchema, ListaLibroOrderByWithAggregationInputObjectSchema.array()]).optional(),
		having: ListaLibroScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(ListaLibroScalarFieldEnumSchema),
		_count: z.union([z.literal(true), ListaLibroCountAggregateInputObjectSchema]).optional(),
		_min: ListaLibroMinAggregateInputObjectSchema.optional(),
		_max: ListaLibroMaxAggregateInputObjectSchema.optional(),
		_avg: ListaLibroAvgAggregateInputObjectSchema.optional(),
		_sum: ListaLibroSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.ListaLibroGroupByArgs>;

export const ListaLibroGroupByZodSchema = z
	.object({
		where: ListaLibroWhereInputObjectSchema.optional(),
		orderBy: z.union([ListaLibroOrderByWithAggregationInputObjectSchema, ListaLibroOrderByWithAggregationInputObjectSchema.array()]).optional(),
		having: ListaLibroScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(ListaLibroScalarFieldEnumSchema),
		_count: z.union([z.literal(true), ListaLibroCountAggregateInputObjectSchema]).optional(),
		_min: ListaLibroMinAggregateInputObjectSchema.optional(),
		_max: ListaLibroMaxAggregateInputObjectSchema.optional(),
		_avg: ListaLibroAvgAggregateInputObjectSchema.optional(),
		_sum: ListaLibroSumAggregateInputObjectSchema.optional(),
	})
	.strict();
