import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { ParrafoAvgOrderByAggregateInputObjectSchema as ParrafoAvgOrderByAggregateInputObjectSchema } from "./ParrafoAvgOrderByAggregateInput.schema.ts";
import { ParrafoCountOrderByAggregateInputObjectSchema as ParrafoCountOrderByAggregateInputObjectSchema } from "./ParrafoCountOrderByAggregateInput.schema.ts";
import { ParrafoMaxOrderByAggregateInputObjectSchema as ParrafoMaxOrderByAggregateInputObjectSchema } from "./ParrafoMaxOrderByAggregateInput.schema.ts";
import { ParrafoMinOrderByAggregateInputObjectSchema as ParrafoMinOrderByAggregateInputObjectSchema } from "./ParrafoMinOrderByAggregateInput.schema.ts";
import { ParrafoSumOrderByAggregateInputObjectSchema as ParrafoSumOrderByAggregateInputObjectSchema } from "./ParrafoSumOrderByAggregateInput.schema.ts";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			contenido: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			indice: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			capituloId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
			_count: z.lazy(() => ParrafoCountOrderByAggregateInputObjectSchema).optional(),
			_avg: z.lazy(() => ParrafoAvgOrderByAggregateInputObjectSchema).optional(),
			_max: z.lazy(() => ParrafoMaxOrderByAggregateInputObjectSchema).optional(),
			_min: z.lazy(() => ParrafoMinOrderByAggregateInputObjectSchema).optional(),
			_sum: z.lazy(() => ParrafoSumOrderByAggregateInputObjectSchema).optional(),
		})
		.strict();
export const ParrafoOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ParrafoOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ParrafoOrderByWithAggregationInput>;
export const ParrafoOrderByWithAggregationInputObjectZodSchema = makeSchema();
