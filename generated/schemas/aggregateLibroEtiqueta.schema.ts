import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { LibroEtiquetaAvgAggregateInputObjectSchema as LibroEtiquetaAvgAggregateInputObjectSchema } from "./objects/LibroEtiquetaAvgAggregateInput.schema.ts";
import { LibroEtiquetaCountAggregateInputObjectSchema as LibroEtiquetaCountAggregateInputObjectSchema } from "./objects/LibroEtiquetaCountAggregateInput.schema.ts";
import { LibroEtiquetaMaxAggregateInputObjectSchema as LibroEtiquetaMaxAggregateInputObjectSchema } from "./objects/LibroEtiquetaMaxAggregateInput.schema.ts";
import { LibroEtiquetaMinAggregateInputObjectSchema as LibroEtiquetaMinAggregateInputObjectSchema } from "./objects/LibroEtiquetaMinAggregateInput.schema.ts";
import { LibroEtiquetaOrderByWithRelationInputObjectSchema as LibroEtiquetaOrderByWithRelationInputObjectSchema } from "./objects/LibroEtiquetaOrderByWithRelationInput.schema.ts";
import { LibroEtiquetaSumAggregateInputObjectSchema as LibroEtiquetaSumAggregateInputObjectSchema } from "./objects/LibroEtiquetaSumAggregateInput.schema.ts";
import { LibroEtiquetaWhereInputObjectSchema as LibroEtiquetaWhereInputObjectSchema } from "./objects/LibroEtiquetaWhereInput.schema.ts";
import { LibroEtiquetaWhereUniqueInputObjectSchema as LibroEtiquetaWhereUniqueInputObjectSchema } from "./objects/LibroEtiquetaWhereUniqueInput.schema.ts";

export const LibroEtiquetaAggregateSchema: z.ZodType<Prisma.LibroEtiquetaAggregateArgs> = z
	.object({
		orderBy: z.union([LibroEtiquetaOrderByWithRelationInputObjectSchema, LibroEtiquetaOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: LibroEtiquetaWhereInputObjectSchema.optional(),
		cursor: LibroEtiquetaWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z.union([z.literal(true), LibroEtiquetaCountAggregateInputObjectSchema]).optional(),
		_min: LibroEtiquetaMinAggregateInputObjectSchema.optional(),
		_max: LibroEtiquetaMaxAggregateInputObjectSchema.optional(),
		_avg: LibroEtiquetaAvgAggregateInputObjectSchema.optional(),
		_sum: LibroEtiquetaSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.LibroEtiquetaAggregateArgs>;

export const LibroEtiquetaAggregateZodSchema = z
	.object({
		orderBy: z.union([LibroEtiquetaOrderByWithRelationInputObjectSchema, LibroEtiquetaOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: LibroEtiquetaWhereInputObjectSchema.optional(),
		cursor: LibroEtiquetaWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z.union([z.literal(true), LibroEtiquetaCountAggregateInputObjectSchema]).optional(),
		_min: LibroEtiquetaMinAggregateInputObjectSchema.optional(),
		_max: LibroEtiquetaMaxAggregateInputObjectSchema.optional(),
		_avg: LibroEtiquetaAvgAggregateInputObjectSchema.optional(),
		_sum: LibroEtiquetaSumAggregateInputObjectSchema.optional(),
	})
	.strict();
