import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { MarcadorCountAggregateInputObjectSchema as MarcadorCountAggregateInputObjectSchema } from "./objects/MarcadorCountAggregateInput.schema.ts";
import { MarcadorOrderByWithRelationInputObjectSchema as MarcadorOrderByWithRelationInputObjectSchema } from "./objects/MarcadorOrderByWithRelationInput.schema.ts";
import { MarcadorWhereInputObjectSchema as MarcadorWhereInputObjectSchema } from "./objects/MarcadorWhereInput.schema.ts";
import { MarcadorWhereUniqueInputObjectSchema as MarcadorWhereUniqueInputObjectSchema } from "./objects/MarcadorWhereUniqueInput.schema.ts";

export const MarcadorCountSchema: z.ZodType<Prisma.MarcadorCountArgs> = z
	.object({
		orderBy: z.union([MarcadorOrderByWithRelationInputObjectSchema, MarcadorOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: MarcadorWhereInputObjectSchema.optional(),
		cursor: MarcadorWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z.union([z.literal(true), MarcadorCountAggregateInputObjectSchema]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.MarcadorCountArgs>;

export const MarcadorCountZodSchema = z
	.object({
		orderBy: z.union([MarcadorOrderByWithRelationInputObjectSchema, MarcadorOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: MarcadorWhereInputObjectSchema.optional(),
		cursor: MarcadorWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z.union([z.literal(true), MarcadorCountAggregateInputObjectSchema]).optional(),
	})
	.strict();
