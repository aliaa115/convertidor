import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
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
export const LibroCategoriaCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LibroCategoriaCountOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaCountOrderByAggregateInput>;
export const LibroCategoriaCountOrderByAggregateInputObjectZodSchema =
	makeSchema();
