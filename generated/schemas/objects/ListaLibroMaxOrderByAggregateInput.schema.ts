import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
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
export const ListaLibroMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ListaLibroMaxOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaLibroMaxOrderByAggregateInput>;
export const ListaLibroMaxOrderByAggregateInputObjectZodSchema = makeSchema();
