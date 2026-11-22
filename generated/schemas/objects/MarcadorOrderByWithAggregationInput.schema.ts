import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { MarcadorAvgOrderByAggregateInputObjectSchema as MarcadorAvgOrderByAggregateInputObjectSchema } from "./MarcadorAvgOrderByAggregateInput.schema.ts";
import { MarcadorCountOrderByAggregateInputObjectSchema as MarcadorCountOrderByAggregateInputObjectSchema } from "./MarcadorCountOrderByAggregateInput.schema.ts";
import { MarcadorMaxOrderByAggregateInputObjectSchema as MarcadorMaxOrderByAggregateInputObjectSchema } from "./MarcadorMaxOrderByAggregateInput.schema.ts";
import { MarcadorMinOrderByAggregateInputObjectSchema as MarcadorMinOrderByAggregateInputObjectSchema } from "./MarcadorMinOrderByAggregateInput.schema.ts";
import { MarcadorSumOrderByAggregateInputObjectSchema as MarcadorSumOrderByAggregateInputObjectSchema } from "./MarcadorSumOrderByAggregateInput.schema.ts";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			nombre: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			color: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			escritorId: SortOrderSchema.optional(),
			parrafoId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
			_count: z.lazy(() => MarcadorCountOrderByAggregateInputObjectSchema).optional(),
			_avg: z.lazy(() => MarcadorAvgOrderByAggregateInputObjectSchema).optional(),
			_max: z.lazy(() => MarcadorMaxOrderByAggregateInputObjectSchema).optional(),
			_min: z.lazy(() => MarcadorMinOrderByAggregateInputObjectSchema).optional(),
			_sum: z.lazy(() => MarcadorSumOrderByAggregateInputObjectSchema).optional(),
		})
		.strict();
export const MarcadorOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.MarcadorOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.MarcadorOrderByWithAggregationInput>;
export const MarcadorOrderByWithAggregationInputObjectZodSchema = makeSchema();
