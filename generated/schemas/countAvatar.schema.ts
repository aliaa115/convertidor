import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { AvatarCountAggregateInputObjectSchema as AvatarCountAggregateInputObjectSchema } from "./objects/AvatarCountAggregateInput.schema.ts";
import { AvatarOrderByWithRelationInputObjectSchema as AvatarOrderByWithRelationInputObjectSchema } from "./objects/AvatarOrderByWithRelationInput.schema.ts";
import { AvatarWhereInputObjectSchema as AvatarWhereInputObjectSchema } from "./objects/AvatarWhereInput.schema.ts";
import { AvatarWhereUniqueInputObjectSchema as AvatarWhereUniqueInputObjectSchema } from "./objects/AvatarWhereUniqueInput.schema.ts";

export const AvatarCountSchema: z.ZodType<Prisma.AvatarCountArgs> = z
	.object({
		orderBy: z.union([AvatarOrderByWithRelationInputObjectSchema, AvatarOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: AvatarWhereInputObjectSchema.optional(),
		cursor: AvatarWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z.union([z.literal(true), AvatarCountAggregateInputObjectSchema]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.AvatarCountArgs>;

export const AvatarCountZodSchema = z
	.object({
		orderBy: z.union([AvatarOrderByWithRelationInputObjectSchema, AvatarOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: AvatarWhereInputObjectSchema.optional(),
		cursor: AvatarWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z.union([z.literal(true), AvatarCountAggregateInputObjectSchema]).optional(),
	})
	.strict();
