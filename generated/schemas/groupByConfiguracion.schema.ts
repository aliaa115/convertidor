import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { ConfiguracionScalarFieldEnumSchema } from "./enums/ConfiguracionScalarFieldEnum.schema.ts";
import { ConfiguracionAvgAggregateInputObjectSchema as ConfiguracionAvgAggregateInputObjectSchema } from "./objects/ConfiguracionAvgAggregateInput.schema.ts";
import { ConfiguracionCountAggregateInputObjectSchema as ConfiguracionCountAggregateInputObjectSchema } from "./objects/ConfiguracionCountAggregateInput.schema.ts";
import { ConfiguracionMaxAggregateInputObjectSchema as ConfiguracionMaxAggregateInputObjectSchema } from "./objects/ConfiguracionMaxAggregateInput.schema.ts";
import { ConfiguracionMinAggregateInputObjectSchema as ConfiguracionMinAggregateInputObjectSchema } from "./objects/ConfiguracionMinAggregateInput.schema.ts";
import { ConfiguracionOrderByWithAggregationInputObjectSchema as ConfiguracionOrderByWithAggregationInputObjectSchema } from "./objects/ConfiguracionOrderByWithAggregationInput.schema.ts";
import { ConfiguracionScalarWhereWithAggregatesInputObjectSchema as ConfiguracionScalarWhereWithAggregatesInputObjectSchema } from "./objects/ConfiguracionScalarWhereWithAggregatesInput.schema.ts";
import { ConfiguracionSumAggregateInputObjectSchema as ConfiguracionSumAggregateInputObjectSchema } from "./objects/ConfiguracionSumAggregateInput.schema.ts";
import { ConfiguracionWhereInputObjectSchema as ConfiguracionWhereInputObjectSchema } from "./objects/ConfiguracionWhereInput.schema.ts";

export const ConfiguracionGroupBySchema: z.ZodType<Prisma.ConfiguracionGroupByArgs> =
	z
		.object({
			where: ConfiguracionWhereInputObjectSchema.optional(),
			orderBy: z
				.union([
					ConfiguracionOrderByWithAggregationInputObjectSchema,
					ConfiguracionOrderByWithAggregationInputObjectSchema.array(),
				])
				.optional(),
			having:
				ConfiguracionScalarWhereWithAggregatesInputObjectSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
			by: z.array(ConfiguracionScalarFieldEnumSchema),
			_count: z
				.union([z.literal(true), ConfiguracionCountAggregateInputObjectSchema])
				.optional(),
			_min: ConfiguracionMinAggregateInputObjectSchema.optional(),
			_max: ConfiguracionMaxAggregateInputObjectSchema.optional(),
			_avg: ConfiguracionAvgAggregateInputObjectSchema.optional(),
			_sum: ConfiguracionSumAggregateInputObjectSchema.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.ConfiguracionGroupByArgs>;

export const ConfiguracionGroupByZodSchema = z
	.object({
		where: ConfiguracionWhereInputObjectSchema.optional(),
		orderBy: z
			.union([
				ConfiguracionOrderByWithAggregationInputObjectSchema,
				ConfiguracionOrderByWithAggregationInputObjectSchema.array(),
			])
			.optional(),
		having: ConfiguracionScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(ConfiguracionScalarFieldEnumSchema),
		_count: z
			.union([z.literal(true), ConfiguracionCountAggregateInputObjectSchema])
			.optional(),
		_min: ConfiguracionMinAggregateInputObjectSchema.optional(),
		_max: ConfiguracionMaxAggregateInputObjectSchema.optional(),
		_avg: ConfiguracionAvgAggregateInputObjectSchema.optional(),
		_sum: ConfiguracionSumAggregateInputObjectSchema.optional(),
	})
	.strict();
