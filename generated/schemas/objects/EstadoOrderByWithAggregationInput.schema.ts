import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { EstadoAvgOrderByAggregateInputObjectSchema as EstadoAvgOrderByAggregateInputObjectSchema } from "./EstadoAvgOrderByAggregateInput.schema.ts";
import { EstadoCountOrderByAggregateInputObjectSchema as EstadoCountOrderByAggregateInputObjectSchema } from "./EstadoCountOrderByAggregateInput.schema.ts";
import { EstadoMaxOrderByAggregateInputObjectSchema as EstadoMaxOrderByAggregateInputObjectSchema } from "./EstadoMaxOrderByAggregateInput.schema.ts";
import { EstadoMinOrderByAggregateInputObjectSchema as EstadoMinOrderByAggregateInputObjectSchema } from "./EstadoMinOrderByAggregateInput.schema.ts";
import { EstadoSumOrderByAggregateInputObjectSchema as EstadoSumOrderByAggregateInputObjectSchema } from "./EstadoSumOrderByAggregateInput.schema.ts";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			nombre: SortOrderSchema.optional(),
			color: z
				.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
				.optional(),
			icon: z
				.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
				.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			_count: z
				.lazy(() => EstadoCountOrderByAggregateInputObjectSchema)
				.optional(),
			_avg: z.lazy(() => EstadoAvgOrderByAggregateInputObjectSchema).optional(),
			_max: z.lazy(() => EstadoMaxOrderByAggregateInputObjectSchema).optional(),
			_min: z.lazy(() => EstadoMinOrderByAggregateInputObjectSchema).optional(),
			_sum: z.lazy(() => EstadoSumOrderByAggregateInputObjectSchema).optional(),
		})
		.strict();
export const EstadoOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.EstadoOrderByWithAggregationInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoOrderByWithAggregationInput>;
export const EstadoOrderByWithAggregationInputObjectZodSchema = makeSchema();
