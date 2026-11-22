import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			escritorId: SortOrderSchema.optional(),
			parrafoId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const MarcadorSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MarcadorSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MarcadorSumOrderByAggregateInput>;
export const MarcadorSumOrderByAggregateInputObjectZodSchema = makeSchema();
