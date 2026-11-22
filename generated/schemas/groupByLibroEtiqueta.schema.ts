import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { LibroEtiquetaScalarFieldEnumSchema } from "./enums/LibroEtiquetaScalarFieldEnum.schema.ts";
import { LibroEtiquetaAvgAggregateInputObjectSchema as LibroEtiquetaAvgAggregateInputObjectSchema } from "./objects/LibroEtiquetaAvgAggregateInput.schema.ts";
import { LibroEtiquetaCountAggregateInputObjectSchema as LibroEtiquetaCountAggregateInputObjectSchema } from "./objects/LibroEtiquetaCountAggregateInput.schema.ts";
import { LibroEtiquetaMaxAggregateInputObjectSchema as LibroEtiquetaMaxAggregateInputObjectSchema } from "./objects/LibroEtiquetaMaxAggregateInput.schema.ts";
import { LibroEtiquetaMinAggregateInputObjectSchema as LibroEtiquetaMinAggregateInputObjectSchema } from "./objects/LibroEtiquetaMinAggregateInput.schema.ts";
import { LibroEtiquetaOrderByWithAggregationInputObjectSchema as LibroEtiquetaOrderByWithAggregationInputObjectSchema } from "./objects/LibroEtiquetaOrderByWithAggregationInput.schema.ts";
import { LibroEtiquetaScalarWhereWithAggregatesInputObjectSchema as LibroEtiquetaScalarWhereWithAggregatesInputObjectSchema } from "./objects/LibroEtiquetaScalarWhereWithAggregatesInput.schema.ts";
import { LibroEtiquetaSumAggregateInputObjectSchema as LibroEtiquetaSumAggregateInputObjectSchema } from "./objects/LibroEtiquetaSumAggregateInput.schema.ts";
import { LibroEtiquetaWhereInputObjectSchema as LibroEtiquetaWhereInputObjectSchema } from "./objects/LibroEtiquetaWhereInput.schema.ts";

export const LibroEtiquetaGroupBySchema: z.ZodType<Prisma.LibroEtiquetaGroupByArgs> =
	z
		.object({
			where: LibroEtiquetaWhereInputObjectSchema.optional(),
			orderBy: z
				.union([
					LibroEtiquetaOrderByWithAggregationInputObjectSchema,
					LibroEtiquetaOrderByWithAggregationInputObjectSchema.array(),
				])
				.optional(),
			having:
				LibroEtiquetaScalarWhereWithAggregatesInputObjectSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
			by: z.array(LibroEtiquetaScalarFieldEnumSchema),
			_count: z
				.union([z.literal(true), LibroEtiquetaCountAggregateInputObjectSchema])
				.optional(),
			_min: LibroEtiquetaMinAggregateInputObjectSchema.optional(),
			_max: LibroEtiquetaMaxAggregateInputObjectSchema.optional(),
			_avg: LibroEtiquetaAvgAggregateInputObjectSchema.optional(),
			_sum: LibroEtiquetaSumAggregateInputObjectSchema.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.LibroEtiquetaGroupByArgs>;

export const LibroEtiquetaGroupByZodSchema = z
	.object({
		where: LibroEtiquetaWhereInputObjectSchema.optional(),
		orderBy: z
			.union([
				LibroEtiquetaOrderByWithAggregationInputObjectSchema,
				LibroEtiquetaOrderByWithAggregationInputObjectSchema.array(),
			])
			.optional(),
		having: LibroEtiquetaScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(LibroEtiquetaScalarFieldEnumSchema),
		_count: z
			.union([z.literal(true), LibroEtiquetaCountAggregateInputObjectSchema])
			.optional(),
		_min: LibroEtiquetaMinAggregateInputObjectSchema.optional(),
		_max: LibroEtiquetaMaxAggregateInputObjectSchema.optional(),
		_avg: LibroEtiquetaAvgAggregateInputObjectSchema.optional(),
		_sum: LibroEtiquetaSumAggregateInputObjectSchema.optional(),
	})
	.strict();
