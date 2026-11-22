import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { LibroCategoriaCountAggregateInputObjectSchema as LibroCategoriaCountAggregateInputObjectSchema } from "./objects/LibroCategoriaCountAggregateInput.schema.ts";
import { LibroCategoriaOrderByWithRelationInputObjectSchema as LibroCategoriaOrderByWithRelationInputObjectSchema } from "./objects/LibroCategoriaOrderByWithRelationInput.schema.ts";
import { LibroCategoriaWhereInputObjectSchema as LibroCategoriaWhereInputObjectSchema } from "./objects/LibroCategoriaWhereInput.schema.ts";
import { LibroCategoriaWhereUniqueInputObjectSchema as LibroCategoriaWhereUniqueInputObjectSchema } from "./objects/LibroCategoriaWhereUniqueInput.schema.ts";

export const LibroCategoriaCountSchema: z.ZodType<Prisma.LibroCategoriaCountArgs> = z
	.object({
		orderBy: z.union([LibroCategoriaOrderByWithRelationInputObjectSchema, LibroCategoriaOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: LibroCategoriaWhereInputObjectSchema.optional(),
		cursor: LibroCategoriaWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z.union([z.literal(true), LibroCategoriaCountAggregateInputObjectSchema]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.LibroCategoriaCountArgs>;

export const LibroCategoriaCountZodSchema = z
	.object({
		orderBy: z.union([LibroCategoriaOrderByWithRelationInputObjectSchema, LibroCategoriaOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: LibroCategoriaWhereInputObjectSchema.optional(),
		cursor: LibroCategoriaWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z.union([z.literal(true), LibroCategoriaCountAggregateInputObjectSchema]).optional(),
	})
	.strict();
