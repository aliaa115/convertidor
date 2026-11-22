import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			listaId: SortOrderSchema.optional(),
			libroId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const ListaLibroAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ListaLibroAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaLibroAvgOrderByAggregateInput>;
export const ListaLibroAvgOrderByAggregateInputObjectZodSchema = makeSchema();
