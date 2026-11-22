import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { CapituloCountAggregateInputObjectSchema as CapituloCountAggregateInputObjectSchema } from "./objects/CapituloCountAggregateInput.schema.ts";
import { CapituloOrderByWithRelationInputObjectSchema as CapituloOrderByWithRelationInputObjectSchema } from "./objects/CapituloOrderByWithRelationInput.schema.ts";
import { CapituloWhereInputObjectSchema as CapituloWhereInputObjectSchema } from "./objects/CapituloWhereInput.schema.ts";
import { CapituloWhereUniqueInputObjectSchema as CapituloWhereUniqueInputObjectSchema } from "./objects/CapituloWhereUniqueInput.schema.ts";

export const CapituloCountSchema: z.ZodType<Prisma.CapituloCountArgs> = z
	.object({
		orderBy: z.union([CapituloOrderByWithRelationInputObjectSchema, CapituloOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: CapituloWhereInputObjectSchema.optional(),
		cursor: CapituloWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z.union([z.literal(true), CapituloCountAggregateInputObjectSchema]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.CapituloCountArgs>;

export const CapituloCountZodSchema = z
	.object({
		orderBy: z.union([CapituloOrderByWithRelationInputObjectSchema, CapituloOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: CapituloWhereInputObjectSchema.optional(),
		cursor: CapituloWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z.union([z.literal(true), CapituloCountAggregateInputObjectSchema]).optional(),
	})
	.strict();
