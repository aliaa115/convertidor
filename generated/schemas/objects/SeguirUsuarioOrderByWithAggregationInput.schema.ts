import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { SeguirUsuarioAvgOrderByAggregateInputObjectSchema as SeguirUsuarioAvgOrderByAggregateInputObjectSchema } from "./SeguirUsuarioAvgOrderByAggregateInput.schema.ts";
import { SeguirUsuarioCountOrderByAggregateInputObjectSchema as SeguirUsuarioCountOrderByAggregateInputObjectSchema } from "./SeguirUsuarioCountOrderByAggregateInput.schema.ts";
import { SeguirUsuarioMaxOrderByAggregateInputObjectSchema as SeguirUsuarioMaxOrderByAggregateInputObjectSchema } from "./SeguirUsuarioMaxOrderByAggregateInput.schema.ts";
import { SeguirUsuarioMinOrderByAggregateInputObjectSchema as SeguirUsuarioMinOrderByAggregateInputObjectSchema } from "./SeguirUsuarioMinOrderByAggregateInput.schema.ts";
import { SeguirUsuarioSumOrderByAggregateInputObjectSchema as SeguirUsuarioSumOrderByAggregateInputObjectSchema } from "./SeguirUsuarioSumOrderByAggregateInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			escritorId: SortOrderSchema.optional(),
			escritorSeguidoId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
			_count: z.lazy(() => SeguirUsuarioCountOrderByAggregateInputObjectSchema).optional(),
			_avg: z.lazy(() => SeguirUsuarioAvgOrderByAggregateInputObjectSchema).optional(),
			_max: z.lazy(() => SeguirUsuarioMaxOrderByAggregateInputObjectSchema).optional(),
			_min: z.lazy(() => SeguirUsuarioMinOrderByAggregateInputObjectSchema).optional(),
			_sum: z.lazy(() => SeguirUsuarioSumOrderByAggregateInputObjectSchema).optional(),
		})
		.strict();
export const SeguirUsuarioOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioOrderByWithAggregationInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioOrderByWithAggregationInput>;
export const SeguirUsuarioOrderByWithAggregationInputObjectZodSchema = makeSchema();
