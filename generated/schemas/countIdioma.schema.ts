import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { IdiomaCountAggregateInputObjectSchema as IdiomaCountAggregateInputObjectSchema } from "./objects/IdiomaCountAggregateInput.schema.ts";
import { IdiomaOrderByWithRelationInputObjectSchema as IdiomaOrderByWithRelationInputObjectSchema } from "./objects/IdiomaOrderByWithRelationInput.schema.ts";
import { IdiomaWhereInputObjectSchema as IdiomaWhereInputObjectSchema } from "./objects/IdiomaWhereInput.schema.ts";
import { IdiomaWhereUniqueInputObjectSchema as IdiomaWhereUniqueInputObjectSchema } from "./objects/IdiomaWhereUniqueInput.schema.ts";

export const IdiomaCountSchema: z.ZodType<Prisma.IdiomaCountArgs> = z
	.object({
		orderBy: z
			.union([
				IdiomaOrderByWithRelationInputObjectSchema,
				IdiomaOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: IdiomaWhereInputObjectSchema.optional(),
		cursor: IdiomaWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z
			.union([z.literal(true), IdiomaCountAggregateInputObjectSchema])
			.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.IdiomaCountArgs>;

export const IdiomaCountZodSchema = z
	.object({
		orderBy: z
			.union([
				IdiomaOrderByWithRelationInputObjectSchema,
				IdiomaOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: IdiomaWhereInputObjectSchema.optional(),
		cursor: IdiomaWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z
			.union([z.literal(true), IdiomaCountAggregateInputObjectSchema])
			.optional(),
	})
	.strict();
