import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { EtiquetaAvgOrderByAggregateInputObjectSchema as EtiquetaAvgOrderByAggregateInputObjectSchema } from "./EtiquetaAvgOrderByAggregateInput.schema.ts";
import { EtiquetaCountOrderByAggregateInputObjectSchema as EtiquetaCountOrderByAggregateInputObjectSchema } from "./EtiquetaCountOrderByAggregateInput.schema.ts";
import { EtiquetaMaxOrderByAggregateInputObjectSchema as EtiquetaMaxOrderByAggregateInputObjectSchema } from "./EtiquetaMaxOrderByAggregateInput.schema.ts";
import { EtiquetaMinOrderByAggregateInputObjectSchema as EtiquetaMinOrderByAggregateInputObjectSchema } from "./EtiquetaMinOrderByAggregateInput.schema.ts";
import { EtiquetaSumOrderByAggregateInputObjectSchema as EtiquetaSumOrderByAggregateInputObjectSchema } from "./EtiquetaSumOrderByAggregateInput.schema.ts";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			nombre: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
			_count: z.lazy(() => EtiquetaCountOrderByAggregateInputObjectSchema).optional(),
			_avg: z.lazy(() => EtiquetaAvgOrderByAggregateInputObjectSchema).optional(),
			_max: z.lazy(() => EtiquetaMaxOrderByAggregateInputObjectSchema).optional(),
			_min: z.lazy(() => EtiquetaMinOrderByAggregateInputObjectSchema).optional(),
			_sum: z.lazy(() => EtiquetaSumOrderByAggregateInputObjectSchema).optional(),
		})
		.strict();
export const EtiquetaOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.EtiquetaOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.EtiquetaOrderByWithAggregationInput>;
export const EtiquetaOrderByWithAggregationInputObjectZodSchema = makeSchema();
