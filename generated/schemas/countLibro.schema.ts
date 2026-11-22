import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { LibroCountAggregateInputObjectSchema as LibroCountAggregateInputObjectSchema } from "./objects/LibroCountAggregateInput.schema.ts";
import { LibroOrderByWithRelationInputObjectSchema as LibroOrderByWithRelationInputObjectSchema } from "./objects/LibroOrderByWithRelationInput.schema.ts";
import { LibroWhereInputObjectSchema as LibroWhereInputObjectSchema } from "./objects/LibroWhereInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./objects/LibroWhereUniqueInput.schema.ts";

export const LibroCountSchema: z.ZodType<Prisma.LibroCountArgs> = z
	.object({
		orderBy: z
			.union([
				LibroOrderByWithRelationInputObjectSchema,
				LibroOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: LibroWhereInputObjectSchema.optional(),
		cursor: LibroWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z
			.union([z.literal(true), LibroCountAggregateInputObjectSchema])
			.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.LibroCountArgs>;

export const LibroCountZodSchema = z
	.object({
		orderBy: z
			.union([
				LibroOrderByWithRelationInputObjectSchema,
				LibroOrderByWithRelationInputObjectSchema.array(),
			])
			.optional(),
		where: LibroWhereInputObjectSchema.optional(),
		cursor: LibroWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z
			.union([z.literal(true), LibroCountAggregateInputObjectSchema])
			.optional(),
	})
	.strict();
