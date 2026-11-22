import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			nombre: SortOrderSchema.optional(),
			indice: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			libroId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const CapituloCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CapituloCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CapituloCountOrderByAggregateInput>;
export const CapituloCountOrderByAggregateInputObjectZodSchema = makeSchema();
