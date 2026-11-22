import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ListaScalarFieldEnumSchema } from "./enums/ListaScalarFieldEnum.schema.ts";
import { ListaAvgAggregateInputObjectSchema as ListaAvgAggregateInputObjectSchema } from "./objects/ListaAvgAggregateInput.schema.ts";
import { ListaCountAggregateInputObjectSchema as ListaCountAggregateInputObjectSchema } from "./objects/ListaCountAggregateInput.schema.ts";
import { ListaMaxAggregateInputObjectSchema as ListaMaxAggregateInputObjectSchema } from "./objects/ListaMaxAggregateInput.schema.ts";
import { ListaMinAggregateInputObjectSchema as ListaMinAggregateInputObjectSchema } from "./objects/ListaMinAggregateInput.schema.ts";
import { ListaOrderByWithAggregationInputObjectSchema as ListaOrderByWithAggregationInputObjectSchema } from "./objects/ListaOrderByWithAggregationInput.schema.ts";
import { ListaScalarWhereWithAggregatesInputObjectSchema as ListaScalarWhereWithAggregatesInputObjectSchema } from "./objects/ListaScalarWhereWithAggregatesInput.schema.ts";
import { ListaSumAggregateInputObjectSchema as ListaSumAggregateInputObjectSchema } from "./objects/ListaSumAggregateInput.schema.ts";
import { ListaWhereInputObjectSchema as ListaWhereInputObjectSchema } from "./objects/ListaWhereInput.schema.ts";

export const ListaGroupBySchema: z.ZodType<Prisma.ListaGroupByArgs> = z
	.object({
		where: ListaWhereInputObjectSchema.optional(),
		orderBy: z.union([ListaOrderByWithAggregationInputObjectSchema, ListaOrderByWithAggregationInputObjectSchema.array()]).optional(),
		having: ListaScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(ListaScalarFieldEnumSchema),
		_count: z.union([z.literal(true), ListaCountAggregateInputObjectSchema]).optional(),
		_min: ListaMinAggregateInputObjectSchema.optional(),
		_max: ListaMaxAggregateInputObjectSchema.optional(),
		_avg: ListaAvgAggregateInputObjectSchema.optional(),
		_sum: ListaSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.ListaGroupByArgs>;

export const ListaGroupByZodSchema = z
	.object({
		where: ListaWhereInputObjectSchema.optional(),
		orderBy: z.union([ListaOrderByWithAggregationInputObjectSchema, ListaOrderByWithAggregationInputObjectSchema.array()]).optional(),
		having: ListaScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(ListaScalarFieldEnumSchema),
		_count: z.union([z.literal(true), ListaCountAggregateInputObjectSchema]).optional(),
		_min: ListaMinAggregateInputObjectSchema.optional(),
		_max: ListaMaxAggregateInputObjectSchema.optional(),
		_avg: ListaAvgAggregateInputObjectSchema.optional(),
		_sum: ListaSumAggregateInputObjectSchema.optional(),
	})
	.strict();
