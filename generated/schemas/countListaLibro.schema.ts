import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ListaLibroCountAggregateInputObjectSchema as ListaLibroCountAggregateInputObjectSchema } from "./objects/ListaLibroCountAggregateInput.schema.ts";
import { ListaLibroOrderByWithRelationInputObjectSchema as ListaLibroOrderByWithRelationInputObjectSchema } from "./objects/ListaLibroOrderByWithRelationInput.schema.ts";
import { ListaLibroWhereInputObjectSchema as ListaLibroWhereInputObjectSchema } from "./objects/ListaLibroWhereInput.schema.ts";
import { ListaLibroWhereUniqueInputObjectSchema as ListaLibroWhereUniqueInputObjectSchema } from "./objects/ListaLibroWhereUniqueInput.schema.ts";

export const ListaLibroCountSchema: z.ZodType<Prisma.ListaLibroCountArgs> = z
	.object({
		orderBy: z
			.union([
				ListaLibroOrderByWithRelationInputObjectSchema,
				ListaLibroOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: ListaLibroWhereInputObjectSchema.optional(),
		cursor: ListaLibroWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z
			.union([z.literal(true), ListaLibroCountAggregateInputObjectSchema])
			.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.ListaLibroCountArgs>;

export const ListaLibroCountZodSchema = z
	.object({
		orderBy: z
			.union([
				ListaLibroOrderByWithRelationInputObjectSchema,
				ListaLibroOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: ListaLibroWhereInputObjectSchema.optional(),
		cursor: ListaLibroWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z
			.union([z.literal(true), ListaLibroCountAggregateInputObjectSchema])
			.optional(),
	})
	.strict();
