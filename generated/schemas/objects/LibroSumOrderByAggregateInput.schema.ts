import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			escritorId: SortOrderSchema.optional(),
			tipoId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
			idiomaId: SortOrderSchema.optional(),
		})
		.strict();
export const LibroSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LibroSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LibroSumOrderByAggregateInput>;
export const LibroSumOrderByAggregateInputObjectZodSchema = makeSchema();
