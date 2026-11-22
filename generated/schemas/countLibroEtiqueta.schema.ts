import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { LibroEtiquetaCountAggregateInputObjectSchema as LibroEtiquetaCountAggregateInputObjectSchema } from "./objects/LibroEtiquetaCountAggregateInput.schema.ts";
import { LibroEtiquetaOrderByWithRelationInputObjectSchema as LibroEtiquetaOrderByWithRelationInputObjectSchema } from "./objects/LibroEtiquetaOrderByWithRelationInput.schema.ts";
import { LibroEtiquetaWhereInputObjectSchema as LibroEtiquetaWhereInputObjectSchema } from "./objects/LibroEtiquetaWhereInput.schema.ts";
import { LibroEtiquetaWhereUniqueInputObjectSchema as LibroEtiquetaWhereUniqueInputObjectSchema } from "./objects/LibroEtiquetaWhereUniqueInput.schema.ts";

export const LibroEtiquetaCountSchema: z.ZodType<Prisma.LibroEtiquetaCountArgs> =
	z
		.object({
			orderBy: z
				.union([
					LibroEtiquetaOrderByWithRelationInputObjectSchema,
					LibroEtiquetaOrderByWithRelationInputObjectSchema.array(),
				])
				.optional(),
			where: LibroEtiquetaWhereInputObjectSchema.optional(),
			cursor: LibroEtiquetaWhereUniqueInputObjectSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
			select: z
				.union([z.literal(true), LibroEtiquetaCountAggregateInputObjectSchema])
				.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.LibroEtiquetaCountArgs>;

export const LibroEtiquetaCountZodSchema = z
	.object({
		orderBy: z
			.union([
				LibroEtiquetaOrderByWithRelationInputObjectSchema,
				LibroEtiquetaOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: LibroEtiquetaWhereInputObjectSchema.optional(),
		cursor: LibroEtiquetaWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z
			.union([z.literal(true), LibroEtiquetaCountAggregateInputObjectSchema])
			.optional(),
	})
	.strict();
