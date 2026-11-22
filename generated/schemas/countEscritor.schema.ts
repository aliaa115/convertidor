import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { EscritorCountAggregateInputObjectSchema as EscritorCountAggregateInputObjectSchema } from "./objects/EscritorCountAggregateInput.schema.ts";
import { EscritorOrderByWithRelationInputObjectSchema as EscritorOrderByWithRelationInputObjectSchema } from "./objects/EscritorOrderByWithRelationInput.schema.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./objects/EscritorWhereInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./objects/EscritorWhereUniqueInput.schema.ts";

export const EscritorCountSchema: z.ZodType<Prisma.EscritorCountArgs> = z
	.object({
		orderBy: z
			.union([
				EscritorOrderByWithRelationInputObjectSchema,
				EscritorOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: EscritorWhereInputObjectSchema.optional(),
		cursor: EscritorWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z
			.union([z.literal(true), EscritorCountAggregateInputObjectSchema])
			.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.EscritorCountArgs>;

export const EscritorCountZodSchema = z
	.object({
		orderBy: z
			.union([
				EscritorOrderByWithRelationInputObjectSchema,
				EscritorOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: EscritorWhereInputObjectSchema.optional(),
		cursor: EscritorWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z
			.union([z.literal(true), EscritorCountAggregateInputObjectSchema])
			.optional(),
	})
	.strict();
