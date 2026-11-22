import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			escritorId: SortOrderSchema.optional(),
			libroId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const FavoritoAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FavoritoAvgOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.FavoritoAvgOrderByAggregateInput>;
export const FavoritoAvgOrderByAggregateInputObjectZodSchema = makeSchema();
