import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			escritorId: SortOrderSchema.optional(),
			parrafoId: SortOrderSchema.optional(),
			comentarioPadreId: SortOrderSchema.optional(),
			tipoId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const ComentarioSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ComentarioSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ComentarioSumOrderByAggregateInput>;
export const ComentarioSumOrderByAggregateInputObjectZodSchema = makeSchema();
