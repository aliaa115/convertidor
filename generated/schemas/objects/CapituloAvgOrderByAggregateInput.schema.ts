import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			indice: SortOrderSchema.optional(),
			libroId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const CapituloAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CapituloAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CapituloAvgOrderByAggregateInput>;
export const CapituloAvgOrderByAggregateInputObjectZodSchema = makeSchema();
