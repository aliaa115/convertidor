import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { AvatarScalarFieldEnumSchema } from "./enums/AvatarScalarFieldEnum.schema.ts";
import { AvatarAvgAggregateInputObjectSchema as AvatarAvgAggregateInputObjectSchema } from "./objects/AvatarAvgAggregateInput.schema.ts";
import { AvatarCountAggregateInputObjectSchema as AvatarCountAggregateInputObjectSchema } from "./objects/AvatarCountAggregateInput.schema.ts";
import { AvatarMaxAggregateInputObjectSchema as AvatarMaxAggregateInputObjectSchema } from "./objects/AvatarMaxAggregateInput.schema.ts";
import { AvatarMinAggregateInputObjectSchema as AvatarMinAggregateInputObjectSchema } from "./objects/AvatarMinAggregateInput.schema.ts";
import { AvatarOrderByWithAggregationInputObjectSchema as AvatarOrderByWithAggregationInputObjectSchema } from "./objects/AvatarOrderByWithAggregationInput.schema.ts";
import { AvatarScalarWhereWithAggregatesInputObjectSchema as AvatarScalarWhereWithAggregatesInputObjectSchema } from "./objects/AvatarScalarWhereWithAggregatesInput.schema.ts";
import { AvatarSumAggregateInputObjectSchema as AvatarSumAggregateInputObjectSchema } from "./objects/AvatarSumAggregateInput.schema.ts";
import { AvatarWhereInputObjectSchema as AvatarWhereInputObjectSchema } from "./objects/AvatarWhereInput.schema.ts";

export const AvatarGroupBySchema: z.ZodType<Prisma.AvatarGroupByArgs> = z
	.object({
		where: AvatarWhereInputObjectSchema.optional(),
		orderBy: z
			.union([
				AvatarOrderByWithAggregationInputObjectSchema,
				AvatarOrderByWithAggregationInputObjectSchema.array(),
			])
			.optional(),
		having: AvatarScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(AvatarScalarFieldEnumSchema),
		_count: z
			.union([z.literal(true), AvatarCountAggregateInputObjectSchema])
			.optional(),
		_min: AvatarMinAggregateInputObjectSchema.optional(),
		_max: AvatarMaxAggregateInputObjectSchema.optional(),
		_avg: AvatarAvgAggregateInputObjectSchema.optional(),
		_sum: AvatarSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.AvatarGroupByArgs>;

export const AvatarGroupByZodSchema = z
	.object({
		where: AvatarWhereInputObjectSchema.optional(),
		orderBy: z
			.union([
				AvatarOrderByWithAggregationInputObjectSchema,
				AvatarOrderByWithAggregationInputObjectSchema.array(),
			])
			.optional(),
		having: AvatarScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(AvatarScalarFieldEnumSchema),
		_count: z
			.union([z.literal(true), AvatarCountAggregateInputObjectSchema])
			.optional(),
		_min: AvatarMinAggregateInputObjectSchema.optional(),
		_max: AvatarMaxAggregateInputObjectSchema.optional(),
		_avg: AvatarAvgAggregateInputObjectSchema.optional(),
		_sum: AvatarSumAggregateInputObjectSchema.optional(),
	})
	.strict();
