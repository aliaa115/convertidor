import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { TipoScalarFieldEnumSchema } from "./enums/TipoScalarFieldEnum.schema.ts";
import { TipoAvgAggregateInputObjectSchema as TipoAvgAggregateInputObjectSchema } from "./objects/TipoAvgAggregateInput.schema.ts";
import { TipoCountAggregateInputObjectSchema as TipoCountAggregateInputObjectSchema } from "./objects/TipoCountAggregateInput.schema.ts";
import { TipoMaxAggregateInputObjectSchema as TipoMaxAggregateInputObjectSchema } from "./objects/TipoMaxAggregateInput.schema.ts";
import { TipoMinAggregateInputObjectSchema as TipoMinAggregateInputObjectSchema } from "./objects/TipoMinAggregateInput.schema.ts";
import { TipoOrderByWithAggregationInputObjectSchema as TipoOrderByWithAggregationInputObjectSchema } from "./objects/TipoOrderByWithAggregationInput.schema.ts";
import { TipoScalarWhereWithAggregatesInputObjectSchema as TipoScalarWhereWithAggregatesInputObjectSchema } from "./objects/TipoScalarWhereWithAggregatesInput.schema.ts";
import { TipoSumAggregateInputObjectSchema as TipoSumAggregateInputObjectSchema } from "./objects/TipoSumAggregateInput.schema.ts";
import { TipoWhereInputObjectSchema as TipoWhereInputObjectSchema } from "./objects/TipoWhereInput.schema.ts";

export const TipoGroupBySchema: z.ZodType<Prisma.TipoGroupByArgs> = z
	.object({
		where: TipoWhereInputObjectSchema.optional(),
		orderBy: z.union([TipoOrderByWithAggregationInputObjectSchema, TipoOrderByWithAggregationInputObjectSchema.array()]).optional(),
		having: TipoScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(TipoScalarFieldEnumSchema),
		_count: z.union([z.literal(true), TipoCountAggregateInputObjectSchema]).optional(),
		_min: TipoMinAggregateInputObjectSchema.optional(),
		_max: TipoMaxAggregateInputObjectSchema.optional(),
		_avg: TipoAvgAggregateInputObjectSchema.optional(),
		_sum: TipoSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.TipoGroupByArgs>;

export const TipoGroupByZodSchema = z
	.object({
		where: TipoWhereInputObjectSchema.optional(),
		orderBy: z.union([TipoOrderByWithAggregationInputObjectSchema, TipoOrderByWithAggregationInputObjectSchema.array()]).optional(),
		having: TipoScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(TipoScalarFieldEnumSchema),
		_count: z.union([z.literal(true), TipoCountAggregateInputObjectSchema]).optional(),
		_min: TipoMinAggregateInputObjectSchema.optional(),
		_max: TipoMaxAggregateInputObjectSchema.optional(),
		_avg: TipoAvgAggregateInputObjectSchema.optional(),
		_sum: TipoSumAggregateInputObjectSchema.optional(),
	})
	.strict();
