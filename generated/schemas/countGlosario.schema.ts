import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { GlosarioCountAggregateInputObjectSchema as GlosarioCountAggregateInputObjectSchema } from "./objects/GlosarioCountAggregateInput.schema.ts";
import { GlosarioOrderByWithRelationInputObjectSchema as GlosarioOrderByWithRelationInputObjectSchema } from "./objects/GlosarioOrderByWithRelationInput.schema.ts";
import { GlosarioWhereInputObjectSchema as GlosarioWhereInputObjectSchema } from "./objects/GlosarioWhereInput.schema.ts";
import { GlosarioWhereUniqueInputObjectSchema as GlosarioWhereUniqueInputObjectSchema } from "./objects/GlosarioWhereUniqueInput.schema.ts";

export const GlosarioCountSchema: z.ZodType<Prisma.GlosarioCountArgs> = z
	.object({
		orderBy: z.union([GlosarioOrderByWithRelationInputObjectSchema, GlosarioOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: GlosarioWhereInputObjectSchema.optional(),
		cursor: GlosarioWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z.union([z.literal(true), GlosarioCountAggregateInputObjectSchema]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.GlosarioCountArgs>;

export const GlosarioCountZodSchema = z
	.object({
		orderBy: z.union([GlosarioOrderByWithRelationInputObjectSchema, GlosarioOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: GlosarioWhereInputObjectSchema.optional(),
		cursor: GlosarioWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z.union([z.literal(true), GlosarioCountAggregateInputObjectSchema]).optional(),
	})
	.strict();
