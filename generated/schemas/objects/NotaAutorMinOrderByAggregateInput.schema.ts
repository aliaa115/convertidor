import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			texto: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			escritorId: SortOrderSchema.optional(),
			capituloId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const NotaAutorMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.NotaAutorMinOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotaAutorMinOrderByAggregateInput>;
export const NotaAutorMinOrderByAggregateInputObjectZodSchema = makeSchema();
