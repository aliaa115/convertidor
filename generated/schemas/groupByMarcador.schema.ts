import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { MarcadorScalarFieldEnumSchema } from "./enums/MarcadorScalarFieldEnum.schema.ts";
import { MarcadorAvgAggregateInputObjectSchema as MarcadorAvgAggregateInputObjectSchema } from "./objects/MarcadorAvgAggregateInput.schema.ts";
import { MarcadorCountAggregateInputObjectSchema as MarcadorCountAggregateInputObjectSchema } from "./objects/MarcadorCountAggregateInput.schema.ts";
import { MarcadorMaxAggregateInputObjectSchema as MarcadorMaxAggregateInputObjectSchema } from "./objects/MarcadorMaxAggregateInput.schema.ts";
import { MarcadorMinAggregateInputObjectSchema as MarcadorMinAggregateInputObjectSchema } from "./objects/MarcadorMinAggregateInput.schema.ts";
import { MarcadorOrderByWithAggregationInputObjectSchema as MarcadorOrderByWithAggregationInputObjectSchema } from "./objects/MarcadorOrderByWithAggregationInput.schema.ts";
import { MarcadorScalarWhereWithAggregatesInputObjectSchema as MarcadorScalarWhereWithAggregatesInputObjectSchema } from "./objects/MarcadorScalarWhereWithAggregatesInput.schema.ts";
import { MarcadorSumAggregateInputObjectSchema as MarcadorSumAggregateInputObjectSchema } from "./objects/MarcadorSumAggregateInput.schema.ts";
import { MarcadorWhereInputObjectSchema as MarcadorWhereInputObjectSchema } from "./objects/MarcadorWhereInput.schema.ts";

export const MarcadorGroupBySchema: z.ZodType<Prisma.MarcadorGroupByArgs> = z
	.object({
		where: MarcadorWhereInputObjectSchema.optional(),
		orderBy: z
			.union([
				MarcadorOrderByWithAggregationInputObjectSchema,
				MarcadorOrderByWithAggregationInputObjectSchema.array(),
			])
			.optional(),
		having: MarcadorScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(MarcadorScalarFieldEnumSchema),
		_count: z
			.union([z.literal(true), MarcadorCountAggregateInputObjectSchema])
			.optional(),
		_min: MarcadorMinAggregateInputObjectSchema.optional(),
		_max: MarcadorMaxAggregateInputObjectSchema.optional(),
		_avg: MarcadorAvgAggregateInputObjectSchema.optional(),
		_sum: MarcadorSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.MarcadorGroupByArgs>;

export const MarcadorGroupByZodSchema = z
	.object({
		where: MarcadorWhereInputObjectSchema.optional(),
		orderBy: z
			.union([
				MarcadorOrderByWithAggregationInputObjectSchema,
				MarcadorOrderByWithAggregationInputObjectSchema.array(),
			])
			.optional(),
		having: MarcadorScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(MarcadorScalarFieldEnumSchema),
		_count: z
			.union([z.literal(true), MarcadorCountAggregateInputObjectSchema])
			.optional(),
		_min: MarcadorMinAggregateInputObjectSchema.optional(),
		_max: MarcadorMaxAggregateInputObjectSchema.optional(),
		_avg: MarcadorAvgAggregateInputObjectSchema.optional(),
		_sum: MarcadorSumAggregateInputObjectSchema.optional(),
	})
	.strict();
