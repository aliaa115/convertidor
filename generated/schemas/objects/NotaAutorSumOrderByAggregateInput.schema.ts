import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			escritorId: SortOrderSchema.optional(),
			capituloId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const NotaAutorSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.NotaAutorSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.NotaAutorSumOrderByAggregateInput>;
export const NotaAutorSumOrderByAggregateInputObjectZodSchema = makeSchema();
