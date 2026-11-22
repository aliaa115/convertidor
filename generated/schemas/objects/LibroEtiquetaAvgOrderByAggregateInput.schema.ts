import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			libroId: SortOrderSchema.optional(),
			etiquetaId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const LibroEtiquetaAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaAvgOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaAvgOrderByAggregateInput>;
export const LibroEtiquetaAvgOrderByAggregateInputObjectZodSchema = makeSchema();
