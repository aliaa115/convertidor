import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
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
export const LibroEtiquetaMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaMinOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaMinOrderByAggregateInput>;
export const LibroEtiquetaMinOrderByAggregateInputObjectZodSchema =
	makeSchema();
