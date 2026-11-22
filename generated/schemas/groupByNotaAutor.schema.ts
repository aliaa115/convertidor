import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { NotaAutorScalarFieldEnumSchema } from "./enums/NotaAutorScalarFieldEnum.schema.ts";
import { NotaAutorAvgAggregateInputObjectSchema as NotaAutorAvgAggregateInputObjectSchema } from "./objects/NotaAutorAvgAggregateInput.schema.ts";
import { NotaAutorCountAggregateInputObjectSchema as NotaAutorCountAggregateInputObjectSchema } from "./objects/NotaAutorCountAggregateInput.schema.ts";
import { NotaAutorMaxAggregateInputObjectSchema as NotaAutorMaxAggregateInputObjectSchema } from "./objects/NotaAutorMaxAggregateInput.schema.ts";
import { NotaAutorMinAggregateInputObjectSchema as NotaAutorMinAggregateInputObjectSchema } from "./objects/NotaAutorMinAggregateInput.schema.ts";
import { NotaAutorOrderByWithAggregationInputObjectSchema as NotaAutorOrderByWithAggregationInputObjectSchema } from "./objects/NotaAutorOrderByWithAggregationInput.schema.ts";
import { NotaAutorScalarWhereWithAggregatesInputObjectSchema as NotaAutorScalarWhereWithAggregatesInputObjectSchema } from "./objects/NotaAutorScalarWhereWithAggregatesInput.schema.ts";
import { NotaAutorSumAggregateInputObjectSchema as NotaAutorSumAggregateInputObjectSchema } from "./objects/NotaAutorSumAggregateInput.schema.ts";
import { NotaAutorWhereInputObjectSchema as NotaAutorWhereInputObjectSchema } from "./objects/NotaAutorWhereInput.schema.ts";

export const NotaAutorGroupBySchema: z.ZodType<Prisma.NotaAutorGroupByArgs> = z
	.object({
		where: NotaAutorWhereInputObjectSchema.optional(),
		orderBy: z
			.union([
				NotaAutorOrderByWithAggregationInputObjectSchema,
				NotaAutorOrderByWithAggregationInputObjectSchema.array(),
			])
			.optional(),
		having: NotaAutorScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(NotaAutorScalarFieldEnumSchema),
		_count: z
			.union([z.literal(true), NotaAutorCountAggregateInputObjectSchema])
			.optional(),
		_min: NotaAutorMinAggregateInputObjectSchema.optional(),
		_max: NotaAutorMaxAggregateInputObjectSchema.optional(),
		_avg: NotaAutorAvgAggregateInputObjectSchema.optional(),
		_sum: NotaAutorSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.NotaAutorGroupByArgs>;

export const NotaAutorGroupByZodSchema = z
	.object({
		where: NotaAutorWhereInputObjectSchema.optional(),
		orderBy: z
			.union([
				NotaAutorOrderByWithAggregationInputObjectSchema,
				NotaAutorOrderByWithAggregationInputObjectSchema.array(),
			])
			.optional(),
		having: NotaAutorScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(NotaAutorScalarFieldEnumSchema),
		_count: z
			.union([z.literal(true), NotaAutorCountAggregateInputObjectSchema])
			.optional(),
		_min: NotaAutorMinAggregateInputObjectSchema.optional(),
		_max: NotaAutorMaxAggregateInputObjectSchema.optional(),
		_avg: NotaAutorAvgAggregateInputObjectSchema.optional(),
		_sum: NotaAutorSumAggregateInputObjectSchema.optional(),
	})
	.strict();
