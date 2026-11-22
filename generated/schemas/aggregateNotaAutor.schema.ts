import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { NotaAutorAvgAggregateInputObjectSchema as NotaAutorAvgAggregateInputObjectSchema } from "./objects/NotaAutorAvgAggregateInput.schema.ts";
import { NotaAutorCountAggregateInputObjectSchema as NotaAutorCountAggregateInputObjectSchema } from "./objects/NotaAutorCountAggregateInput.schema.ts";
import { NotaAutorMaxAggregateInputObjectSchema as NotaAutorMaxAggregateInputObjectSchema } from "./objects/NotaAutorMaxAggregateInput.schema.ts";
import { NotaAutorMinAggregateInputObjectSchema as NotaAutorMinAggregateInputObjectSchema } from "./objects/NotaAutorMinAggregateInput.schema.ts";
import { NotaAutorOrderByWithRelationInputObjectSchema as NotaAutorOrderByWithRelationInputObjectSchema } from "./objects/NotaAutorOrderByWithRelationInput.schema.ts";
import { NotaAutorSumAggregateInputObjectSchema as NotaAutorSumAggregateInputObjectSchema } from "./objects/NotaAutorSumAggregateInput.schema.ts";
import { NotaAutorWhereInputObjectSchema as NotaAutorWhereInputObjectSchema } from "./objects/NotaAutorWhereInput.schema.ts";
import { NotaAutorWhereUniqueInputObjectSchema as NotaAutorWhereUniqueInputObjectSchema } from "./objects/NotaAutorWhereUniqueInput.schema.ts";

export const NotaAutorAggregateSchema: z.ZodType<Prisma.NotaAutorAggregateArgs> =
	z
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
			_count: z
				.union([z.literal(true), NotaAutorCountAggregateInputObjectSchema])
				.optional(),
			_min: NotaAutorMinAggregateInputObjectSchema.optional(),
			_max: NotaAutorMaxAggregateInputObjectSchema.optional(),
			_avg: NotaAutorAvgAggregateInputObjectSchema.optional(),
			_sum: NotaAutorSumAggregateInputObjectSchema.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.NotaAutorAggregateArgs>;

export const NotaAutorAggregateZodSchema = z
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
		_count: z
			.union([z.literal(true), NotaAutorCountAggregateInputObjectSchema])
			.optional(),
		_min: NotaAutorMinAggregateInputObjectSchema.optional(),
		_max: NotaAutorMaxAggregateInputObjectSchema.optional(),
		_avg: NotaAutorAvgAggregateInputObjectSchema.optional(),
		_sum: NotaAutorSumAggregateInputObjectSchema.optional(),
	})
	.strict();
