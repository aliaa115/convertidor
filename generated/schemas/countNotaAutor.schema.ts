import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { NotaAutorCountAggregateInputObjectSchema as NotaAutorCountAggregateInputObjectSchema } from "./objects/NotaAutorCountAggregateInput.schema.ts";
import { NotaAutorOrderByWithRelationInputObjectSchema as NotaAutorOrderByWithRelationInputObjectSchema } from "./objects/NotaAutorOrderByWithRelationInput.schema.ts";
import { NotaAutorWhereInputObjectSchema as NotaAutorWhereInputObjectSchema } from "./objects/NotaAutorWhereInput.schema.ts";
import { NotaAutorWhereUniqueInputObjectSchema as NotaAutorWhereUniqueInputObjectSchema } from "./objects/NotaAutorWhereUniqueInput.schema.ts";

export const NotaAutorCountSchema: z.ZodType<Prisma.NotaAutorCountArgs> = z
	.object({
		orderBy: z
			.union([
				NotaAutorOrderByWithRelationInputObjectSchema,
				NotaAutorOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: NotaAutorWhereInputObjectSchema.optional(),
		cursor: NotaAutorWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z
			.union([z.literal(true), NotaAutorCountAggregateInputObjectSchema])
			.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.NotaAutorCountArgs>;

export const NotaAutorCountZodSchema = z
	.object({
		orderBy: z
			.union([
				NotaAutorOrderByWithRelationInputObjectSchema,
				NotaAutorOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: NotaAutorWhereInputObjectSchema.optional(),
		cursor: NotaAutorWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z
			.union([z.literal(true), NotaAutorCountAggregateInputObjectSchema])
			.optional(),
	})
	.strict();
