import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { GlosarioAvgOrderByAggregateInputObjectSchema as GlosarioAvgOrderByAggregateInputObjectSchema } from "./GlosarioAvgOrderByAggregateInput.schema.ts";
import { GlosarioCountOrderByAggregateInputObjectSchema as GlosarioCountOrderByAggregateInputObjectSchema } from "./GlosarioCountOrderByAggregateInput.schema.ts";
import { GlosarioMaxOrderByAggregateInputObjectSchema as GlosarioMaxOrderByAggregateInputObjectSchema } from "./GlosarioMaxOrderByAggregateInput.schema.ts";
import { GlosarioMinOrderByAggregateInputObjectSchema as GlosarioMinOrderByAggregateInputObjectSchema } from "./GlosarioMinOrderByAggregateInput.schema.ts";
import { GlosarioSumOrderByAggregateInputObjectSchema as GlosarioSumOrderByAggregateInputObjectSchema } from "./GlosarioSumOrderByAggregateInput.schema.ts";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			palabra: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			significado: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			libroId: SortOrderSchema.optional(),
			escritorId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
			_count: z.lazy(() => GlosarioCountOrderByAggregateInputObjectSchema).optional(),
			_avg: z.lazy(() => GlosarioAvgOrderByAggregateInputObjectSchema).optional(),
			_max: z.lazy(() => GlosarioMaxOrderByAggregateInputObjectSchema).optional(),
			_min: z.lazy(() => GlosarioMinOrderByAggregateInputObjectSchema).optional(),
			_sum: z.lazy(() => GlosarioSumOrderByAggregateInputObjectSchema).optional(),
		})
		.strict();
export const GlosarioOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.GlosarioOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.GlosarioOrderByWithAggregationInput>;
export const GlosarioOrderByWithAggregationInputObjectZodSchema = makeSchema();
