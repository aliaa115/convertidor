import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { LibroEtiquetaAvgOrderByAggregateInputObjectSchema as LibroEtiquetaAvgOrderByAggregateInputObjectSchema } from "./LibroEtiquetaAvgOrderByAggregateInput.schema.ts";
import { LibroEtiquetaCountOrderByAggregateInputObjectSchema as LibroEtiquetaCountOrderByAggregateInputObjectSchema } from "./LibroEtiquetaCountOrderByAggregateInput.schema.ts";
import { LibroEtiquetaMaxOrderByAggregateInputObjectSchema as LibroEtiquetaMaxOrderByAggregateInputObjectSchema } from "./LibroEtiquetaMaxOrderByAggregateInput.schema.ts";
import { LibroEtiquetaMinOrderByAggregateInputObjectSchema as LibroEtiquetaMinOrderByAggregateInputObjectSchema } from "./LibroEtiquetaMinOrderByAggregateInput.schema.ts";
import { LibroEtiquetaSumOrderByAggregateInputObjectSchema as LibroEtiquetaSumOrderByAggregateInputObjectSchema } from "./LibroEtiquetaSumOrderByAggregateInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			libroId: SortOrderSchema.optional(),
			etiquetaId: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
			_count: z
				.lazy(() => LibroEtiquetaCountOrderByAggregateInputObjectSchema)
				.optional(),
			_avg: z
				.lazy(() => LibroEtiquetaAvgOrderByAggregateInputObjectSchema)
				.optional(),
			_max: z
				.lazy(() => LibroEtiquetaMaxOrderByAggregateInputObjectSchema)
				.optional(),
			_min: z
				.lazy(() => LibroEtiquetaMinOrderByAggregateInputObjectSchema)
				.optional(),
			_sum: z
				.lazy(() => LibroEtiquetaSumOrderByAggregateInputObjectSchema)
				.optional(),
		})
		.strict();
export const LibroEtiquetaOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaOrderByWithAggregationInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaOrderByWithAggregationInput>;
export const LibroEtiquetaOrderByWithAggregationInputObjectZodSchema =
	makeSchema();
