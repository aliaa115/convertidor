import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { NotificacionCountAggregateInputObjectSchema as NotificacionCountAggregateInputObjectSchema } from "./objects/NotificacionCountAggregateInput.schema.ts";
import { NotificacionOrderByWithRelationInputObjectSchema as NotificacionOrderByWithRelationInputObjectSchema } from "./objects/NotificacionOrderByWithRelationInput.schema.ts";
import { NotificacionWhereInputObjectSchema as NotificacionWhereInputObjectSchema } from "./objects/NotificacionWhereInput.schema.ts";
import { NotificacionWhereUniqueInputObjectSchema as NotificacionWhereUniqueInputObjectSchema } from "./objects/NotificacionWhereUniqueInput.schema.ts";

export const NotificacionCountSchema: z.ZodType<Prisma.NotificacionCountArgs> = z
	.object({
		orderBy: z.union([NotificacionOrderByWithRelationInputObjectSchema, NotificacionOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: NotificacionWhereInputObjectSchema.optional(),
		cursor: NotificacionWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z.union([z.literal(true), NotificacionCountAggregateInputObjectSchema]).optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.NotificacionCountArgs>;

export const NotificacionCountZodSchema = z
	.object({
		orderBy: z.union([NotificacionOrderByWithRelationInputObjectSchema, NotificacionOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: NotificacionWhereInputObjectSchema.optional(),
		cursor: NotificacionWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		select: z.union([z.literal(true), NotificacionCountAggregateInputObjectSchema]).optional(),
	})
	.strict();
