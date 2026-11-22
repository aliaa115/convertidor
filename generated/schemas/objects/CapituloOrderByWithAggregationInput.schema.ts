import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { CapituloAvgOrderByAggregateInputObjectSchema as CapituloAvgOrderByAggregateInputObjectSchema } from "./CapituloAvgOrderByAggregateInput.schema.ts";
import { CapituloCountOrderByAggregateInputObjectSchema as CapituloCountOrderByAggregateInputObjectSchema } from "./CapituloCountOrderByAggregateInput.schema.ts";
import { CapituloMaxOrderByAggregateInputObjectSchema as CapituloMaxOrderByAggregateInputObjectSchema } from "./CapituloMaxOrderByAggregateInput.schema.ts";
import { CapituloMinOrderByAggregateInputObjectSchema as CapituloMinOrderByAggregateInputObjectSchema } from "./CapituloMinOrderByAggregateInput.schema.ts";
import { CapituloSumOrderByAggregateInputObjectSchema as CapituloSumOrderByAggregateInputObjectSchema } from "./CapituloSumOrderByAggregateInput.schema.ts";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			nombre: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			indice: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			libroId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
			_count: z.lazy(() => CapituloCountOrderByAggregateInputObjectSchema).optional(),
			_avg: z.lazy(() => CapituloAvgOrderByAggregateInputObjectSchema).optional(),
			_max: z.lazy(() => CapituloMaxOrderByAggregateInputObjectSchema).optional(),
			_min: z.lazy(() => CapituloMinOrderByAggregateInputObjectSchema).optional(),
			_sum: z.lazy(() => CapituloSumOrderByAggregateInputObjectSchema).optional(),
		})
		.strict();
export const CapituloOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CapituloOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CapituloOrderByWithAggregationInput>;
export const CapituloOrderByWithAggregationInputObjectZodSchema = makeSchema();
