import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			contenido: SortOrderSchema.optional(),
			indice: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			capituloId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const ParrafoMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ParrafoMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ParrafoMinOrderByAggregateInput>;
export const ParrafoMinOrderByAggregateInputObjectZodSchema = makeSchema();
