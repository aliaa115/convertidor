import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
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
export const NotificacionMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.NotificacionMaxOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotificacionMaxOrderByAggregateInput>;
export const NotificacionMaxOrderByAggregateInputObjectZodSchema = makeSchema();
