import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ListaAvgAggregateInputObjectSchema as ListaAvgAggregateInputObjectSchema } from "./objects/ListaAvgAggregateInput.schema.ts";
import { ListaCountAggregateInputObjectSchema as ListaCountAggregateInputObjectSchema } from "./objects/ListaCountAggregateInput.schema.ts";
import { ListaMaxAggregateInputObjectSchema as ListaMaxAggregateInputObjectSchema } from "./objects/ListaMaxAggregateInput.schema.ts";
import { ListaMinAggregateInputObjectSchema as ListaMinAggregateInputObjectSchema } from "./objects/ListaMinAggregateInput.schema.ts";
import { ListaOrderByWithRelationInputObjectSchema as ListaOrderByWithRelationInputObjectSchema } from "./objects/ListaOrderByWithRelationInput.schema.ts";
import { ListaSumAggregateInputObjectSchema as ListaSumAggregateInputObjectSchema } from "./objects/ListaSumAggregateInput.schema.ts";
import { ListaWhereInputObjectSchema as ListaWhereInputObjectSchema } from "./objects/ListaWhereInput.schema.ts";
import { ListaWhereUniqueInputObjectSchema as ListaWhereUniqueInputObjectSchema } from "./objects/ListaWhereUniqueInput.schema.ts";

export const ListaAggregateSchema: z.ZodType<Prisma.ListaAggregateArgs> = z
	.object({
		orderBy: z.union([ListaOrderByWithRelationInputObjectSchema, ListaOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: ListaWhereInputObjectSchema.optional(),
		cursor: ListaWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z.union([z.literal(true), ListaCountAggregateInputObjectSchema]).optional(),
		_min: ListaMinAggregateInputObjectSchema.optional(),
		_max: ListaMaxAggregateInputObjectSchema.optional(),
		_avg: ListaAvgAggregateInputObjectSchema.optional(),
		_sum: ListaSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.ListaAggregateArgs>;

export const ListaAggregateZodSchema = z
	.object({
		orderBy: z.union([ListaOrderByWithRelationInputObjectSchema, ListaOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: ListaWhereInputObjectSchema.optional(),
		cursor: ListaWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z.union([z.literal(true), ListaCountAggregateInputObjectSchema]).optional(),
		_min: ListaMinAggregateInputObjectSchema.optional(),
		_max: ListaMaxAggregateInputObjectSchema.optional(),
		_avg: ListaAvgAggregateInputObjectSchema.optional(),
		_sum: ListaSumAggregateInputObjectSchema.optional(),
	})
	.strict();
