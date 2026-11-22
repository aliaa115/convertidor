import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			usuarioId: SortOrderSchema.optional(),
			entidadId: SortOrderSchema.optional(),
		})
		.strict();
export const NotificacionAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.NotificacionAvgOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotificacionAvgOrderByAggregateInput>;
export const NotificacionAvgOrderByAggregateInputObjectZodSchema = makeSchema();
