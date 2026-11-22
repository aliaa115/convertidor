import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
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
export const NotaAutorMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.NotaAutorMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.NotaAutorMaxOrderByAggregateInput>;
export const NotaAutorMaxOrderByAggregateInputObjectZodSchema = makeSchema();
