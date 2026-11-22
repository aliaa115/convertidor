import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			escritorId: SortOrderSchema.optional(),
			libroId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const FavoritoMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FavoritoMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FavoritoMinOrderByAggregateInput>;
export const FavoritoMinOrderByAggregateInputObjectZodSchema = makeSchema();
