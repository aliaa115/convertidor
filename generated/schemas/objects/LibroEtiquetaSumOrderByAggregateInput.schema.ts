import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			libroId: SortOrderSchema.optional(),
			etiquetaId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const LibroEtiquetaSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaSumOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaSumOrderByAggregateInput>;
export const LibroEtiquetaSumOrderByAggregateInputObjectZodSchema =
	makeSchema();
