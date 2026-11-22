import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			nombre: SortOrderSchema.optional(),
			siglas: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const IdiomaCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.IdiomaCountOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.IdiomaCountOrderByAggregateInput>;
export const IdiomaCountOrderByAggregateInputObjectZodSchema = makeSchema();
