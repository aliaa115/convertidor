import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			libroId: SortOrderSchema.optional(),
			etiquetaId: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const LibroEtiquetaMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaMaxOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaMaxOrderByAggregateInput>;
export const LibroEtiquetaMaxOrderByAggregateInputObjectZodSchema = makeSchema();
