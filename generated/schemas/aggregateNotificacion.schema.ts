import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { NotificacionAvgAggregateInputObjectSchema as NotificacionAvgAggregateInputObjectSchema } from "./objects/NotificacionAvgAggregateInput.schema.ts";
import { NotificacionCountAggregateInputObjectSchema as NotificacionCountAggregateInputObjectSchema } from "./objects/NotificacionCountAggregateInput.schema.ts";
import { NotificacionMaxAggregateInputObjectSchema as NotificacionMaxAggregateInputObjectSchema } from "./objects/NotificacionMaxAggregateInput.schema.ts";
import { NotificacionMinAggregateInputObjectSchema as NotificacionMinAggregateInputObjectSchema } from "./objects/NotificacionMinAggregateInput.schema.ts";
import { NotificacionOrderByWithRelationInputObjectSchema as NotificacionOrderByWithRelationInputObjectSchema } from "./objects/NotificacionOrderByWithRelationInput.schema.ts";
import { NotificacionSumAggregateInputObjectSchema as NotificacionSumAggregateInputObjectSchema } from "./objects/NotificacionSumAggregateInput.schema.ts";
import { NotificacionWhereInputObjectSchema as NotificacionWhereInputObjectSchema } from "./objects/NotificacionWhereInput.schema.ts";
import { NotificacionWhereUniqueInputObjectSchema as NotificacionWhereUniqueInputObjectSchema } from "./objects/NotificacionWhereUniqueInput.schema.ts";

export const NotificacionAggregateSchema: z.ZodType<Prisma.NotificacionAggregateArgs> = z
	.object({
		orderBy: z.union([NotificacionOrderByWithRelationInputObjectSchema, NotificacionOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: NotificacionWhereInputObjectSchema.optional(),
		cursor: NotificacionWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z.union([z.literal(true), NotificacionCountAggregateInputObjectSchema]).optional(),
		_min: NotificacionMinAggregateInputObjectSchema.optional(),
		_max: NotificacionMaxAggregateInputObjectSchema.optional(),
		_avg: NotificacionAvgAggregateInputObjectSchema.optional(),
		_sum: NotificacionSumAggregateInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.NotificacionAggregateArgs>;

export const NotificacionAggregateZodSchema = z
	.object({
		orderBy: z.union([NotificacionOrderByWithRelationInputObjectSchema, NotificacionOrderByWithRelationInputObjectSchema.array()]).optional(),
		where: NotificacionWhereInputObjectSchema.optional(),
		cursor: NotificacionWhereUniqueInputObjectSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		_count: z.union([z.literal(true), NotificacionCountAggregateInputObjectSchema]).optional(),
		_min: NotificacionMinAggregateInputObjectSchema.optional(),
		_max: NotificacionMaxAggregateInputObjectSchema.optional(),
		_avg: NotificacionAvgAggregateInputObjectSchema.optional(),
		_sum: NotificacionSumAggregateInputObjectSchema.optional(),
	})
	.strict();
