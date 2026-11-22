import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { NotificacionScalarFieldEnumSchema } from "./enums/NotificacionScalarFieldEnum.schema.ts";
import { NotificacionAvgAggregateInputObjectSchema as NotificacionAvgAggregateInputObjectSchema } from "./objects/NotificacionAvgAggregateInput.schema.ts";
import { NotificacionCountAggregateInputObjectSchema as NotificacionCountAggregateInputObjectSchema } from "./objects/NotificacionCountAggregateInput.schema.ts";
import { NotificacionMaxAggregateInputObjectSchema as NotificacionMaxAggregateInputObjectSchema } from "./objects/NotificacionMaxAggregateInput.schema.ts";
import { NotificacionMinAggregateInputObjectSchema as NotificacionMinAggregateInputObjectSchema } from "./objects/NotificacionMinAggregateInput.schema.ts";
import { NotificacionOrderByWithAggregationInputObjectSchema as NotificacionOrderByWithAggregationInputObjectSchema } from "./objects/NotificacionOrderByWithAggregationInput.schema.ts";
import { NotificacionScalarWhereWithAggregatesInputObjectSchema as NotificacionScalarWhereWithAggregatesInputObjectSchema } from "./objects/NotificacionScalarWhereWithAggregatesInput.schema.ts";
import { NotificacionSumAggregateInputObjectSchema as NotificacionSumAggregateInputObjectSchema } from "./objects/NotificacionSumAggregateInput.schema.ts";
import { NotificacionWhereInputObjectSchema as NotificacionWhereInputObjectSchema } from "./objects/NotificacionWhereInput.schema.ts";

export const NotificacionGroupBySchema: z.ZodType<Prisma.NotificacionGroupByArgs> = z
	.object({
		where: NotificacionWhereInputObjectSchema.optional(),
		orderBy: z.union([NotificacionOrderByWithAggregationInputObjectSchema, NotificacionOrderByWithAggregationInputObjectSchema.array()]).optional(),
		having: NotificacionScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(NotificacionScalarFieldEnumSchema),
		_count: z.union([z.literal(true), NotificacionCountAggregateInputObjectSchema]).optional(),
		_min: NotificacionMinAggregateInputObjectSchema.optional(),
		_max: NotificacionMaxAggregateInputObjectSchema.optional(),
		_avg: NotificacionAvgAggregateInputObjectSchema.optional(),
		_sum: NotificacionSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.NotificacionGroupByArgs>;

export const NotificacionGroupByZodSchema = z
	.object({
		where: NotificacionWhereInputObjectSchema.optional(),
		orderBy: z.union([NotificacionOrderByWithAggregationInputObjectSchema, NotificacionOrderByWithAggregationInputObjectSchema.array()]).optional(),
		having: NotificacionScalarWhereWithAggregatesInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		by: z.array(NotificacionScalarFieldEnumSchema),
		_count: z.union([z.literal(true), NotificacionCountAggregateInputObjectSchema]).optional(),
		_min: NotificacionMinAggregateInputObjectSchema.optional(),
		_max: NotificacionMaxAggregateInputObjectSchema.optional(),
		_avg: NotificacionAvgAggregateInputObjectSchema.optional(),
		_sum: NotificacionSumAggregateInputObjectSchema.optional(),
	})
	.strict();
