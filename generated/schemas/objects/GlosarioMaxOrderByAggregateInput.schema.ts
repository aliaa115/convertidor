import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
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
export const GlosarioMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GlosarioMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GlosarioMaxOrderByAggregateInput>;
export const GlosarioMaxOrderByAggregateInputObjectZodSchema = makeSchema();
