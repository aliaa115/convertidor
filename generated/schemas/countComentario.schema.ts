import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ComentarioCountAggregateInputObjectSchema as ComentarioCountAggregateInputObjectSchema } from "./objects/ComentarioCountAggregateInput.schema.ts";
import { ComentarioOrderByWithRelationInputObjectSchema as ComentarioOrderByWithRelationInputObjectSchema } from "./objects/ComentarioOrderByWithRelationInput.schema.ts";
import { ComentarioWhereInputObjectSchema as ComentarioWhereInputObjectSchema } from "./objects/ComentarioWhereInput.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./objects/ComentarioWhereUniqueInput.schema.ts";

export const ComentarioCountSchema: z.ZodType<Prisma.ComentarioCountArgs> = z
	.object({
		orderBy: z.union([ComentarioOrderByWithRelationInputObjectSchema, ComentarioOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: ComentarioWhereInputObjectSchema.optional(),
		cursor: ComentarioWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z.union([z.literal(true), ComentarioCountAggregateInputObjectSchema]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.ComentarioCountArgs>;

export const ComentarioCountZodSchema = z
	.object({
		orderBy: z.union([ComentarioOrderByWithRelationInputObjectSchema, ComentarioOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: ComentarioWhereInputObjectSchema.optional(),
		cursor: ComentarioWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z.union([z.literal(true), ComentarioCountAggregateInputObjectSchema]).optional(),
	})
	.strict();
