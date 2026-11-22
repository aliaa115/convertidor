import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { CategoriaAvgOrderByAggregateInputObjectSchema as CategoriaAvgOrderByAggregateInputObjectSchema } from "./CategoriaAvgOrderByAggregateInput.schema.ts";
import { CategoriaCountOrderByAggregateInputObjectSchema as CategoriaCountOrderByAggregateInputObjectSchema } from "./CategoriaCountOrderByAggregateInput.schema.ts";
import { CategoriaMaxOrderByAggregateInputObjectSchema as CategoriaMaxOrderByAggregateInputObjectSchema } from "./CategoriaMaxOrderByAggregateInput.schema.ts";
import { CategoriaMinOrderByAggregateInputObjectSchema as CategoriaMinOrderByAggregateInputObjectSchema } from "./CategoriaMinOrderByAggregateInput.schema.ts";
import { CategoriaSumOrderByAggregateInputObjectSchema as CategoriaSumOrderByAggregateInputObjectSchema } from "./CategoriaSumOrderByAggregateInput.schema.ts";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			nombre: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
			_count: z.lazy(() => CategoriaCountOrderByAggregateInputObjectSchema).optional(),
			_avg: z.lazy(() => CategoriaAvgOrderByAggregateInputObjectSchema).optional(),
			_max: z.lazy(() => CategoriaMaxOrderByAggregateInputObjectSchema).optional(),
			_min: z.lazy(() => CategoriaMinOrderByAggregateInputObjectSchema).optional(),
			_sum: z.lazy(() => CategoriaSumOrderByAggregateInputObjectSchema).optional(),
		})
		.strict();
export const CategoriaOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CategoriaOrderByWithAggregationInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CategoriaOrderByWithAggregationInput>;
export const CategoriaOrderByWithAggregationInputObjectZodSchema = makeSchema();
