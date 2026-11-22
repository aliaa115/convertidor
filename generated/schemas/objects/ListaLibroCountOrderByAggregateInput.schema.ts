import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			listaId: SortOrderSchema.optional(),
			libroId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const ListaLibroCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ListaLibroCountOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaLibroCountOrderByAggregateInput>;
export const ListaLibroCountOrderByAggregateInputObjectZodSchema = makeSchema();
