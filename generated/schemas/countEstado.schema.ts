import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { EstadoCountAggregateInputObjectSchema as EstadoCountAggregateInputObjectSchema } from "./objects/EstadoCountAggregateInput.schema.ts";
import { EstadoOrderByWithRelationInputObjectSchema as EstadoOrderByWithRelationInputObjectSchema } from "./objects/EstadoOrderByWithRelationInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./objects/EstadoWhereInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./objects/EstadoWhereUniqueInput.schema.ts";

export const EstadoCountSchema: z.ZodType<Prisma.EstadoCountArgs> = z
	.object({
		orderBy: z
			.union([
				EstadoOrderByWithRelationInputObjectSchema,
				EstadoOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: EstadoWhereInputObjectSchema.optional(),
		cursor: EstadoWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z
			.union([z.literal(true), EstadoCountAggregateInputObjectSchema])
			.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.EstadoCountArgs>;

export const EstadoCountZodSchema = z
	.object({
		orderBy: z
			.union([
				EstadoOrderByWithRelationInputObjectSchema,
				EstadoOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: EstadoWhereInputObjectSchema.optional(),
		cursor: EstadoWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z
			.union([z.literal(true), EstadoCountAggregateInputObjectSchema])
			.optional(),
	})
	.strict();
