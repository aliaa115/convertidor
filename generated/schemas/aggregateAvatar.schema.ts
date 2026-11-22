import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { AvatarAvgAggregateInputObjectSchema as AvatarAvgAggregateInputObjectSchema } from "./objects/AvatarAvgAggregateInput.schema.ts";
import { AvatarCountAggregateInputObjectSchema as AvatarCountAggregateInputObjectSchema } from "./objects/AvatarCountAggregateInput.schema.ts";
import { AvatarMaxAggregateInputObjectSchema as AvatarMaxAggregateInputObjectSchema } from "./objects/AvatarMaxAggregateInput.schema.ts";
import { AvatarMinAggregateInputObjectSchema as AvatarMinAggregateInputObjectSchema } from "./objects/AvatarMinAggregateInput.schema.ts";
import { AvatarOrderByWithRelationInputObjectSchema as AvatarOrderByWithRelationInputObjectSchema } from "./objects/AvatarOrderByWithRelationInput.schema.ts";
import { AvatarSumAggregateInputObjectSchema as AvatarSumAggregateInputObjectSchema } from "./objects/AvatarSumAggregateInput.schema.ts";
import { AvatarWhereInputObjectSchema as AvatarWhereInputObjectSchema } from "./objects/AvatarWhereInput.schema.ts";
import { AvatarWhereUniqueInputObjectSchema as AvatarWhereUniqueInputObjectSchema } from "./objects/AvatarWhereUniqueInput.schema.ts";

export const AvatarAggregateSchema: z.ZodType<Prisma.AvatarAggregateArgs> = z
	.object({
		orderBy: z
			.union([
				AvatarOrderByWithRelationInputObjectSchema,
				AvatarOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: AvatarWhereInputObjectSchema.optional(),
		cursor: AvatarWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z
			.union([z.literal(true), AvatarCountAggregateInputObjectSchema])
			.optional(),
		_min: AvatarMinAggregateInputObjectSchema.optional(),
		_max: AvatarMaxAggregateInputObjectSchema.optional(),
		_avg: AvatarAvgAggregateInputObjectSchema.optional(),
		_sum: AvatarSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.AvatarAggregateArgs>;

export const AvatarAggregateZodSchema = z
	.object({
		orderBy: z
			.union([
				AvatarOrderByWithRelationInputObjectSchema,
				AvatarOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: AvatarWhereInputObjectSchema.optional(),
		cursor: AvatarWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z
			.union([z.literal(true), AvatarCountAggregateInputObjectSchema])
			.optional(),
		_min: AvatarMinAggregateInputObjectSchema.optional(),
		_max: AvatarMaxAggregateInputObjectSchema.optional(),
		_avg: AvatarAvgAggregateInputObjectSchema.optional(),
		_sum: AvatarSumAggregateInputObjectSchema.optional(),
	})
	.strict();
