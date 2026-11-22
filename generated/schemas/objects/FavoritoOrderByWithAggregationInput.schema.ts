import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { FavoritoAvgOrderByAggregateInputObjectSchema as FavoritoAvgOrderByAggregateInputObjectSchema } from "./FavoritoAvgOrderByAggregateInput.schema.ts";
import { FavoritoCountOrderByAggregateInputObjectSchema as FavoritoCountOrderByAggregateInputObjectSchema } from "./FavoritoCountOrderByAggregateInput.schema.ts";
import { FavoritoMaxOrderByAggregateInputObjectSchema as FavoritoMaxOrderByAggregateInputObjectSchema } from "./FavoritoMaxOrderByAggregateInput.schema.ts";
import { FavoritoMinOrderByAggregateInputObjectSchema as FavoritoMinOrderByAggregateInputObjectSchema } from "./FavoritoMinOrderByAggregateInput.schema.ts";
import { FavoritoSumOrderByAggregateInputObjectSchema as FavoritoSumOrderByAggregateInputObjectSchema } from "./FavoritoSumOrderByAggregateInput.schema.ts";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			escritorId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			libroId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			estadoId: SortOrderSchema.optional(),
			_count: z.lazy(() => FavoritoCountOrderByAggregateInputObjectSchema).optional(),
			_avg: z.lazy(() => FavoritoAvgOrderByAggregateInputObjectSchema).optional(),
			_max: z.lazy(() => FavoritoMaxOrderByAggregateInputObjectSchema).optional(),
			_min: z.lazy(() => FavoritoMinOrderByAggregateInputObjectSchema).optional(),
			_sum: z.lazy(() => FavoritoSumOrderByAggregateInputObjectSchema).optional(),
		})
		.strict();
export const FavoritoOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.FavoritoOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.FavoritoOrderByWithAggregationInput>;
export const FavoritoOrderByWithAggregationInputObjectZodSchema = makeSchema();
