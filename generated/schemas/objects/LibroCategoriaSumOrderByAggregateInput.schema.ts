import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			libroId: SortOrderSchema.optional(),
			categoriaId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const LibroCategoriaSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LibroCategoriaSumOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaSumOrderByAggregateInput>;
export const LibroCategoriaSumOrderByAggregateInputObjectZodSchema = makeSchema();
