import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			nombre: SortOrderSchema.optional(),
			indice: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			libroId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const CapituloMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CapituloMinOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloMinOrderByAggregateInput>;
export const CapituloMinOrderByAggregateInputObjectZodSchema = makeSchema();
