import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			titulo: SortOrderSchema.optional(),
			mensaje: SortOrderSchema.optional(),
			tipo: SortOrderSchema.optional(),
			leida: SortOrderSchema.optional(),
			usuarioId: SortOrderSchema.optional(),
			entidadId: SortOrderSchema.optional(),
			entidadTipo: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
		})
		.strict();
export const NotificacionMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.NotificacionMinOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotificacionMinOrderByAggregateInput>;
export const NotificacionMinOrderByAggregateInputObjectZodSchema = makeSchema();
