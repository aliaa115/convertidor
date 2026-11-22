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
export const LibroEtiquetaCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaCountOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaCountOrderByAggregateInput>;
export const LibroEtiquetaCountOrderByAggregateInputObjectZodSchema =
	makeSchema();
