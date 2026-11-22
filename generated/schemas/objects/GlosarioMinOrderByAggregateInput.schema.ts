import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			palabra: SortOrderSchema.optional(),
			significado: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			libroId: SortOrderSchema.optional(),
			escritorId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const GlosarioMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GlosarioMinOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.GlosarioMinOrderByAggregateInput>;
export const GlosarioMinOrderByAggregateInputObjectZodSchema = makeSchema();
