import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			nombre: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const CategoriaCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CategoriaCountOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CategoriaCountOrderByAggregateInput>;
export const CategoriaCountOrderByAggregateInputObjectZodSchema = makeSchema();
