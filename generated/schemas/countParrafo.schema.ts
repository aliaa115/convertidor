import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ParrafoCountAggregateInputObjectSchema as ParrafoCountAggregateInputObjectSchema } from "./objects/ParrafoCountAggregateInput.schema.ts";
import { ParrafoOrderByWithRelationInputObjectSchema as ParrafoOrderByWithRelationInputObjectSchema } from "./objects/ParrafoOrderByWithRelationInput.schema.ts";
import { ParrafoWhereInputObjectSchema as ParrafoWhereInputObjectSchema } from "./objects/ParrafoWhereInput.schema.ts";
import { ParrafoWhereUniqueInputObjectSchema as ParrafoWhereUniqueInputObjectSchema } from "./objects/ParrafoWhereUniqueInput.schema.ts";

export const ParrafoCountSchema: z.ZodType<Prisma.ParrafoCountArgs> = z
	.object({
		orderBy: z
			.union([
				ParrafoOrderByWithRelationInputObjectSchema,
				ParrafoOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: ParrafoWhereInputObjectSchema.optional(),
		cursor: ParrafoWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z
			.union([z.literal(true), ParrafoCountAggregateInputObjectSchema])
			.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.ParrafoCountArgs>;

export const ParrafoCountZodSchema = z
	.object({
		orderBy: z
			.union([
				ParrafoOrderByWithRelationInputObjectSchema,
				ParrafoOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: ParrafoWhereInputObjectSchema.optional(),
		cursor: ParrafoWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z
			.union([z.literal(true), ParrafoCountAggregateInputObjectSchema])
			.optional(),
	})
	.strict();
