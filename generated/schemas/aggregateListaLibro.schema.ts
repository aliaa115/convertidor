import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ListaLibroAvgAggregateInputObjectSchema as ListaLibroAvgAggregateInputObjectSchema } from "./objects/ListaLibroAvgAggregateInput.schema.ts";
import { ListaLibroCountAggregateInputObjectSchema as ListaLibroCountAggregateInputObjectSchema } from "./objects/ListaLibroCountAggregateInput.schema.ts";
import { ListaLibroMaxAggregateInputObjectSchema as ListaLibroMaxAggregateInputObjectSchema } from "./objects/ListaLibroMaxAggregateInput.schema.ts";
import { ListaLibroMinAggregateInputObjectSchema as ListaLibroMinAggregateInputObjectSchema } from "./objects/ListaLibroMinAggregateInput.schema.ts";
import { ListaLibroOrderByWithRelationInputObjectSchema as ListaLibroOrderByWithRelationInputObjectSchema } from "./objects/ListaLibroOrderByWithRelationInput.schema.ts";
import { ListaLibroSumAggregateInputObjectSchema as ListaLibroSumAggregateInputObjectSchema } from "./objects/ListaLibroSumAggregateInput.schema.ts";
import { ListaLibroWhereInputObjectSchema as ListaLibroWhereInputObjectSchema } from "./objects/ListaLibroWhereInput.schema.ts";
import { ListaLibroWhereUniqueInputObjectSchema as ListaLibroWhereUniqueInputObjectSchema } from "./objects/ListaLibroWhereUniqueInput.schema.ts";

export const ListaLibroAggregateSchema: z.ZodType<Prisma.ListaLibroAggregateArgs> = z
	.object({
		orderBy: z.union([ListaLibroOrderByWithRelationInputObjectSchema, ListaLibroOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: ListaLibroWhereInputObjectSchema.optional(),
		cursor: ListaLibroWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z.union([z.literal(true), ListaLibroCountAggregateInputObjectSchema]).optional(),
		_min: ListaLibroMinAggregateInputObjectSchema.optional(),
		_max: ListaLibroMaxAggregateInputObjectSchema.optional(),
		_avg: ListaLibroAvgAggregateInputObjectSchema.optional(),
		_sum: ListaLibroSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.ListaLibroAggregateArgs>;

export const ListaLibroAggregateZodSchema = z
	.object({
		orderBy: z.union([ListaLibroOrderByWithRelationInputObjectSchema, ListaLibroOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: ListaLibroWhereInputObjectSchema.optional(),
		cursor: ListaLibroWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z.union([z.literal(true), ListaLibroCountAggregateInputObjectSchema]).optional(),
		_min: ListaLibroMinAggregateInputObjectSchema.optional(),
		_max: ListaLibroMaxAggregateInputObjectSchema.optional(),
		_avg: ListaLibroAvgAggregateInputObjectSchema.optional(),
		_sum: ListaLibroSumAggregateInputObjectSchema.optional(),
	})
	.strict();
