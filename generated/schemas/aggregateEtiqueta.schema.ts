import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { EtiquetaAvgAggregateInputObjectSchema as EtiquetaAvgAggregateInputObjectSchema } from "./objects/EtiquetaAvgAggregateInput.schema.ts";
import { EtiquetaCountAggregateInputObjectSchema as EtiquetaCountAggregateInputObjectSchema } from "./objects/EtiquetaCountAggregateInput.schema.ts";
import { EtiquetaMaxAggregateInputObjectSchema as EtiquetaMaxAggregateInputObjectSchema } from "./objects/EtiquetaMaxAggregateInput.schema.ts";
import { EtiquetaMinAggregateInputObjectSchema as EtiquetaMinAggregateInputObjectSchema } from "./objects/EtiquetaMinAggregateInput.schema.ts";
import { EtiquetaOrderByWithRelationInputObjectSchema as EtiquetaOrderByWithRelationInputObjectSchema } from "./objects/EtiquetaOrderByWithRelationInput.schema.ts";
import { EtiquetaSumAggregateInputObjectSchema as EtiquetaSumAggregateInputObjectSchema } from "./objects/EtiquetaSumAggregateInput.schema.ts";
import { EtiquetaWhereInputObjectSchema as EtiquetaWhereInputObjectSchema } from "./objects/EtiquetaWhereInput.schema.ts";
import { EtiquetaWhereUniqueInputObjectSchema as EtiquetaWhereUniqueInputObjectSchema } from "./objects/EtiquetaWhereUniqueInput.schema.ts";

export const EtiquetaAggregateSchema: z.ZodType<Prisma.EtiquetaAggregateArgs> =
	z
		.object({
			orderBy: z
				.union([
					EtiquetaOrderByWithRelationInputObjectSchema,
					EtiquetaOrderByWithRelationInputObjectSchema.array(),
				])
				.optional(),
			where: EtiquetaWhereInputObjectSchema.optional(),
			cursor: EtiquetaWhereUniqueInputObjectSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
			_count: z
				.union([z.literal(true), EtiquetaCountAggregateInputObjectSchema])
				.optional(),
			_min: EtiquetaMinAggregateInputObjectSchema.optional(),
			_max: EtiquetaMaxAggregateInputObjectSchema.optional(),
			_avg: EtiquetaAvgAggregateInputObjectSchema.optional(),
			_sum: EtiquetaSumAggregateInputObjectSchema.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.EtiquetaAggregateArgs>;

export const EtiquetaAggregateZodSchema = z
	.object({
		orderBy: z
			.union([
				EtiquetaOrderByWithRelationInputObjectSchema,
				EtiquetaOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: EtiquetaWhereInputObjectSchema.optional(),
		cursor: EtiquetaWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z
			.union([z.literal(true), EtiquetaCountAggregateInputObjectSchema])
			.optional(),
		_min: EtiquetaMinAggregateInputObjectSchema.optional(),
		_max: EtiquetaMaxAggregateInputObjectSchema.optional(),
		_avg: EtiquetaAvgAggregateInputObjectSchema.optional(),
		_sum: EtiquetaSumAggregateInputObjectSchema.optional(),
	})
	.strict();
