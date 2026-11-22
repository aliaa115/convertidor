import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { IdiomaAvgOrderByAggregateInputObjectSchema as IdiomaAvgOrderByAggregateInputObjectSchema } from "./IdiomaAvgOrderByAggregateInput.schema.ts";
import { IdiomaCountOrderByAggregateInputObjectSchema as IdiomaCountOrderByAggregateInputObjectSchema } from "./IdiomaCountOrderByAggregateInput.schema.ts";
import { IdiomaMaxOrderByAggregateInputObjectSchema as IdiomaMaxOrderByAggregateInputObjectSchema } from "./IdiomaMaxOrderByAggregateInput.schema.ts";
import { IdiomaMinOrderByAggregateInputObjectSchema as IdiomaMinOrderByAggregateInputObjectSchema } from "./IdiomaMinOrderByAggregateInput.schema.ts";
import { IdiomaSumOrderByAggregateInputObjectSchema as IdiomaSumOrderByAggregateInputObjectSchema } from "./IdiomaSumOrderByAggregateInput.schema.ts";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			nombre: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			siglas: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
			_count: z.lazy(() => IdiomaCountOrderByAggregateInputObjectSchema).optional(),
			_avg: z.lazy(() => IdiomaAvgOrderByAggregateInputObjectSchema).optional(),
			_max: z.lazy(() => IdiomaMaxOrderByAggregateInputObjectSchema).optional(),
			_min: z.lazy(() => IdiomaMinOrderByAggregateInputObjectSchema).optional(),
			_sum: z.lazy(() => IdiomaSumOrderByAggregateInputObjectSchema).optional(),
		})
		.strict();
export const IdiomaOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.IdiomaOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.IdiomaOrderByWithAggregationInput>;
export const IdiomaOrderByWithAggregationInputObjectZodSchema = makeSchema();
