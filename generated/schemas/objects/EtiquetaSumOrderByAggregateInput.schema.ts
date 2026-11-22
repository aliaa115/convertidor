import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const EtiquetaSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EtiquetaSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EtiquetaSumOrderByAggregateInput>;
export const EtiquetaSumOrderByAggregateInputObjectZodSchema = makeSchema();
