import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema.ts";
import { TipoAvgOrderByAggregateInputObjectSchema as TipoAvgOrderByAggregateInputObjectSchema } from "./TipoAvgOrderByAggregateInput.schema.ts";
import { TipoCountOrderByAggregateInputObjectSchema as TipoCountOrderByAggregateInputObjectSchema } from "./TipoCountOrderByAggregateInput.schema.ts";
import { TipoMaxOrderByAggregateInputObjectSchema as TipoMaxOrderByAggregateInputObjectSchema } from "./TipoMaxOrderByAggregateInput.schema.ts";
import { TipoMinOrderByAggregateInputObjectSchema as TipoMinOrderByAggregateInputObjectSchema } from "./TipoMinOrderByAggregateInput.schema.ts";
import { TipoSumOrderByAggregateInputObjectSchema as TipoSumOrderByAggregateInputObjectSchema } from "./TipoSumOrderByAggregateInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			nombre: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			tabla: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			estadoId: SortOrderSchema.optional(),
			_count: z.lazy(() => TipoCountOrderByAggregateInputObjectSchema).optional(),
			_avg: z.lazy(() => TipoAvgOrderByAggregateInputObjectSchema).optional(),
			_max: z.lazy(() => TipoMaxOrderByAggregateInputObjectSchema).optional(),
			_min: z.lazy(() => TipoMinOrderByAggregateInputObjectSchema).optional(),
			_sum: z.lazy(() => TipoSumOrderByAggregateInputObjectSchema).optional(),
		})
		.strict();
export const TipoOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TipoOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TipoOrderByWithAggregationInput>;
export const TipoOrderByWithAggregationInputObjectZodSchema = makeSchema();
