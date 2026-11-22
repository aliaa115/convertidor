import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ListaCountAggregateInputObjectSchema as ListaCountAggregateInputObjectSchema } from "./objects/ListaCountAggregateInput.schema.ts";
import { ListaOrderByWithRelationInputObjectSchema as ListaOrderByWithRelationInputObjectSchema } from "./objects/ListaOrderByWithRelationInput.schema.ts";
import { ListaWhereInputObjectSchema as ListaWhereInputObjectSchema } from "./objects/ListaWhereInput.schema.ts";
import { ListaWhereUniqueInputObjectSchema as ListaWhereUniqueInputObjectSchema } from "./objects/ListaWhereUniqueInput.schema.ts";

export const ListaCountSchema: z.ZodType<Prisma.ListaCountArgs> = z
	.object({
		orderBy: z.union([ListaOrderByWithRelationInputObjectSchema, ListaOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: ListaWhereInputObjectSchema.optional(),
		cursor: ListaWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z.union([z.literal(true), ListaCountAggregateInputObjectSchema]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.ListaCountArgs>;

export const ListaCountZodSchema = z
	.object({
		orderBy: z.union([ListaOrderByWithRelationInputObjectSchema, ListaOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: ListaWhereInputObjectSchema.optional(),
		cursor: ListaWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z.union([z.literal(true), ListaCountAggregateInputObjectSchema]).optional(),
	})
	.strict();
