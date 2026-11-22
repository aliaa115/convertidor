import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { TipoAvgAggregateInputObjectSchema as TipoAvgAggregateInputObjectSchema } from "./objects/TipoAvgAggregateInput.schema.ts";
import { TipoCountAggregateInputObjectSchema as TipoCountAggregateInputObjectSchema } from "./objects/TipoCountAggregateInput.schema.ts";
import { TipoMaxAggregateInputObjectSchema as TipoMaxAggregateInputObjectSchema } from "./objects/TipoMaxAggregateInput.schema.ts";
import { TipoMinAggregateInputObjectSchema as TipoMinAggregateInputObjectSchema } from "./objects/TipoMinAggregateInput.schema.ts";
import { TipoOrderByWithRelationInputObjectSchema as TipoOrderByWithRelationInputObjectSchema } from "./objects/TipoOrderByWithRelationInput.schema.ts";
import { TipoSumAggregateInputObjectSchema as TipoSumAggregateInputObjectSchema } from "./objects/TipoSumAggregateInput.schema.ts";
import { TipoWhereInputObjectSchema as TipoWhereInputObjectSchema } from "./objects/TipoWhereInput.schema.ts";
import { TipoWhereUniqueInputObjectSchema as TipoWhereUniqueInputObjectSchema } from "./objects/TipoWhereUniqueInput.schema.ts";

export const TipoAggregateSchema: z.ZodType<Prisma.TipoAggregateArgs> = z
	.object({
		orderBy: z.union([TipoOrderByWithRelationInputObjectSchema, TipoOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: TipoWhereInputObjectSchema.optional(),
		cursor: TipoWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z.union([z.literal(true), TipoCountAggregateInputObjectSchema]).optional(),
		_min: TipoMinAggregateInputObjectSchema.optional(),
		_max: TipoMaxAggregateInputObjectSchema.optional(),
		_avg: TipoAvgAggregateInputObjectSchema.optional(),
		_sum: TipoSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.TipoAggregateArgs>;

export const TipoAggregateZodSchema = z
	.object({
		orderBy: z.union([TipoOrderByWithRelationInputObjectSchema, TipoOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: TipoWhereInputObjectSchema.optional(),
		cursor: TipoWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z.union([z.literal(true), TipoCountAggregateInputObjectSchema]).optional(),
		_min: TipoMinAggregateInputObjectSchema.optional(),
		_max: TipoMaxAggregateInputObjectSchema.optional(),
		_avg: TipoAvgAggregateInputObjectSchema.optional(),
		_sum: TipoSumAggregateInputObjectSchema.optional(),
	})
	.strict();
