import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			libroId: SortOrderSchema.optional(),
			categoriaId: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const LibroCategoriaMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LibroCategoriaMinOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaMinOrderByAggregateInput>;
export const LibroCategoriaMinOrderByAggregateInputObjectZodSchema = makeSchema();
