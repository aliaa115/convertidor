import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ConfiguracionAvgAggregateInputObjectSchema as ConfiguracionAvgAggregateInputObjectSchema } from "./objects/ConfiguracionAvgAggregateInput.schema.ts";
import { ConfiguracionCountAggregateInputObjectSchema as ConfiguracionCountAggregateInputObjectSchema } from "./objects/ConfiguracionCountAggregateInput.schema.ts";
import { ConfiguracionMaxAggregateInputObjectSchema as ConfiguracionMaxAggregateInputObjectSchema } from "./objects/ConfiguracionMaxAggregateInput.schema.ts";
import { ConfiguracionMinAggregateInputObjectSchema as ConfiguracionMinAggregateInputObjectSchema } from "./objects/ConfiguracionMinAggregateInput.schema.ts";
import { ConfiguracionOrderByWithRelationInputObjectSchema as ConfiguracionOrderByWithRelationInputObjectSchema } from "./objects/ConfiguracionOrderByWithRelationInput.schema.ts";
import { ConfiguracionSumAggregateInputObjectSchema as ConfiguracionSumAggregateInputObjectSchema } from "./objects/ConfiguracionSumAggregateInput.schema.ts";
import { ConfiguracionWhereInputObjectSchema as ConfiguracionWhereInputObjectSchema } from "./objects/ConfiguracionWhereInput.schema.ts";
import { ConfiguracionWhereUniqueInputObjectSchema as ConfiguracionWhereUniqueInputObjectSchema } from "./objects/ConfiguracionWhereUniqueInput.schema.ts";

export const ConfiguracionAggregateSchema: z.ZodType<Prisma.ConfiguracionAggregateArgs> =
	z
		.object({
			orderBy: z
				.union([
					ConfiguracionOrderByWithRelationInputObjectSchema,
					ConfiguracionOrderByWithRelationInputObjectSchema.array(),
				])
				.optional(),
			where: ConfiguracionWhereInputObjectSchema.optional(),
			cursor: ConfiguracionWhereUniqueInputObjectSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
			_count: z
				.union([z.literal(true), ConfiguracionCountAggregateInputObjectSchema])
				.optional(),
			_min: ConfiguracionMinAggregateInputObjectSchema.optional(),
			_max: ConfiguracionMaxAggregateInputObjectSchema.optional(),
			_avg: ConfiguracionAvgAggregateInputObjectSchema.optional(),
			_sum: ConfiguracionSumAggregateInputObjectSchema.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.ConfiguracionAggregateArgs>;

export const ConfiguracionAggregateZodSchema = z
	.object({
		orderBy: z
			.union([
				ConfiguracionOrderByWithRelationInputObjectSchema,
				ConfiguracionOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: ConfiguracionWhereInputObjectSchema.optional(),
		cursor: ConfiguracionWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z
			.union([z.literal(true), ConfiguracionCountAggregateInputObjectSchema])
			.optional(),
		_min: ConfiguracionMinAggregateInputObjectSchema.optional(),
		_max: ConfiguracionMaxAggregateInputObjectSchema.optional(),
		_avg: ConfiguracionAvgAggregateInputObjectSchema.optional(),
		_sum: ConfiguracionSumAggregateInputObjectSchema.optional(),
	})
	.strict();
