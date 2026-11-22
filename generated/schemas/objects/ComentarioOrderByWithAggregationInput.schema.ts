import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { ComentarioAvgOrderByAggregateInputObjectSchema as ComentarioAvgOrderByAggregateInputObjectSchema } from "./ComentarioAvgOrderByAggregateInput.schema.ts";
import { ComentarioCountOrderByAggregateInputObjectSchema as ComentarioCountOrderByAggregateInputObjectSchema } from "./ComentarioCountOrderByAggregateInput.schema.ts";
import { ComentarioMaxOrderByAggregateInputObjectSchema as ComentarioMaxOrderByAggregateInputObjectSchema } from "./ComentarioMaxOrderByAggregateInput.schema.ts";
import { ComentarioMinOrderByAggregateInputObjectSchema as ComentarioMinOrderByAggregateInputObjectSchema } from "./ComentarioMinOrderByAggregateInput.schema.ts";
import { ComentarioSumOrderByAggregateInputObjectSchema as ComentarioSumOrderByAggregateInputObjectSchema } from "./ComentarioSumOrderByAggregateInput.schema.ts";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			contenido: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			escritorId: SortOrderSchema.optional(),
			parrafoId: SortOrderSchema.optional(),
			comentarioPadreId: z
				.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
				.optional(),
			tipoId: z
				.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
				.optional(),
			estadoId: SortOrderSchema.optional(),
			_count: z
				.lazy(() => ComentarioCountOrderByAggregateInputObjectSchema)
				.optional(),
			_avg: z
				.lazy(() => ComentarioAvgOrderByAggregateInputObjectSchema)
				.optional(),
			_max: z
				.lazy(() => ComentarioMaxOrderByAggregateInputObjectSchema)
				.optional(),
			_min: z
				.lazy(() => ComentarioMinOrderByAggregateInputObjectSchema)
				.optional(),
			_sum: z
				.lazy(() => ComentarioSumOrderByAggregateInputObjectSchema)
				.optional(),
		})
		.strict();
export const ComentarioOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ComentarioOrderByWithAggregationInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioOrderByWithAggregationInput>;
export const ComentarioOrderByWithAggregationInputObjectZodSchema =
	makeSchema();
