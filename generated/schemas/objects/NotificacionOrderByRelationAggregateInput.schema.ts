import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			_count: SortOrderSchema.optional(),
		})
		.strict();
export const NotificacionOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.NotificacionOrderByRelationAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotificacionOrderByRelationAggregateInput>;
export const NotificacionOrderByRelationAggregateInputObjectZodSchema = makeSchema();
