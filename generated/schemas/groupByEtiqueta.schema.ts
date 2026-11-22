import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { EtiquetaScalarFieldEnumSchema } from "./enums/EtiquetaScalarFieldEnum.schema.ts";
import { EtiquetaAvgAggregateInputObjectSchema as EtiquetaAvgAggregateInputObjectSchema } from "./objects/EtiquetaAvgAggregateInput.schema.ts";
import { EtiquetaCountAggregateInputObjectSchema as EtiquetaCountAggregateInputObjectSchema } from "./objects/EtiquetaCountAggregateInput.schema.ts";
import { EtiquetaMaxAggregateInputObjectSchema as EtiquetaMaxAggregateInputObjectSchema } from "./objects/EtiquetaMaxAggregateInput.schema.ts";
import { EtiquetaMinAggregateInputObjectSchema as EtiquetaMinAggregateInputObjectSchema } from "./objects/EtiquetaMinAggregateInput.schema.ts";
import { EtiquetaOrderByWithAggregationInputObjectSchema as EtiquetaOrderByWithAggregationInputObjectSchema } from "./objects/EtiquetaOrderByWithAggregationInput.schema.ts";
import { EtiquetaScalarWhereWithAggregatesInputObjectSchema as EtiquetaScalarWhereWithAggregatesInputObjectSchema } from "./objects/EtiquetaScalarWhereWithAggregatesInput.schema.ts";
import { EtiquetaSumAggregateInputObjectSchema as EtiquetaSumAggregateInputObjectSchema } from "./objects/EtiquetaSumAggregateInput.schema.ts";
import { EtiquetaWhereInputObjectSchema as EtiquetaWhereInputObjectSchema } from "./objects/EtiquetaWhereInput.schema.ts";

export const EtiquetaGroupBySchema: z.ZodType<Prisma.EtiquetaGroupByArgs> = z
	.object({
		where: EtiquetaWhereInputObjectSchema.optional(),
		orderBy: z.union([EtiquetaOrderByWithAggregationInputObjectSchema, EtiquetaOrderByWithAggregationInputObjectSchema.array()]).optional(),
		having: EtiquetaScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(EtiquetaScalarFieldEnumSchema),
		_count: z.union([z.literal(true), EtiquetaCountAggregateInputObjectSchema]).optional(),
		_min: EtiquetaMinAggregateInputObjectSchema.optional(),
		_max: EtiquetaMaxAggregateInputObjectSchema.optional(),
		_avg: EtiquetaAvgAggregateInputObjectSchema.optional(),
		_sum: EtiquetaSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.EtiquetaGroupByArgs>;

export const EtiquetaGroupByZodSchema = z
	.object({
		where: EtiquetaWhereInputObjectSchema.optional(),
		orderBy: z.union([EtiquetaOrderByWithAggregationInputObjectSchema, EtiquetaOrderByWithAggregationInputObjectSchema.array()]).optional(),
		having: EtiquetaScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(EtiquetaScalarFieldEnumSchema),
		_count: z.union([z.literal(true), EtiquetaCountAggregateInputObjectSchema]).optional(),
		_min: EtiquetaMinAggregateInputObjectSchema.optional(),
		_max: EtiquetaMaxAggregateInputObjectSchema.optional(),
		_avg: EtiquetaAvgAggregateInputObjectSchema.optional(),
		_sum: EtiquetaSumAggregateInputObjectSchema.optional(),
	})
	.strict();
