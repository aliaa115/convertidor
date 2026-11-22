import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { LibroCategoriaAvgOrderByAggregateInputObjectSchema as LibroCategoriaAvgOrderByAggregateInputObjectSchema } from "./LibroCategoriaAvgOrderByAggregateInput.schema.ts";
import { LibroCategoriaCountOrderByAggregateInputObjectSchema as LibroCategoriaCountOrderByAggregateInputObjectSchema } from "./LibroCategoriaCountOrderByAggregateInput.schema.ts";
import { LibroCategoriaMaxOrderByAggregateInputObjectSchema as LibroCategoriaMaxOrderByAggregateInputObjectSchema } from "./LibroCategoriaMaxOrderByAggregateInput.schema.ts";
import { LibroCategoriaMinOrderByAggregateInputObjectSchema as LibroCategoriaMinOrderByAggregateInputObjectSchema } from "./LibroCategoriaMinOrderByAggregateInput.schema.ts";
import { LibroCategoriaSumOrderByAggregateInputObjectSchema as LibroCategoriaSumOrderByAggregateInputObjectSchema } from "./LibroCategoriaSumOrderByAggregateInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			libroId: SortOrderSchema.optional(),
			categoriaId: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
			_count: z
				.lazy(() => LibroCategoriaCountOrderByAggregateInputObjectSchema)
				.optional(),
			_avg: z
				.lazy(() => LibroCategoriaAvgOrderByAggregateInputObjectSchema)
				.optional(),
			_max: z
				.lazy(() => LibroCategoriaMaxOrderByAggregateInputObjectSchema)
				.optional(),
			_min: z
				.lazy(() => LibroCategoriaMinOrderByAggregateInputObjectSchema)
				.optional(),
			_sum: z
				.lazy(() => LibroCategoriaSumOrderByAggregateInputObjectSchema)
				.optional(),
		})
		.strict();
export const LibroCategoriaOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.LibroCategoriaOrderByWithAggregationInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaOrderByWithAggregationInput>;
export const LibroCategoriaOrderByWithAggregationInputObjectZodSchema =
	makeSchema();
