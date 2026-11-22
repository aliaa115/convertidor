import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
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
export const FavoritoCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FavoritoCountOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.FavoritoCountOrderByAggregateInput>;
export const FavoritoCountOrderByAggregateInputObjectZodSchema = makeSchema();
