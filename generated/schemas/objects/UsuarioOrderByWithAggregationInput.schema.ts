import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { UsuarioAvgOrderByAggregateInputObjectSchema as UsuarioAvgOrderByAggregateInputObjectSchema } from "./UsuarioAvgOrderByAggregateInput.schema.ts";
import { UsuarioCountOrderByAggregateInputObjectSchema as UsuarioCountOrderByAggregateInputObjectSchema } from "./UsuarioCountOrderByAggregateInput.schema.ts";
import { UsuarioMaxOrderByAggregateInputObjectSchema as UsuarioMaxOrderByAggregateInputObjectSchema } from "./UsuarioMaxOrderByAggregateInput.schema.ts";
import { UsuarioMinOrderByAggregateInputObjectSchema as UsuarioMinOrderByAggregateInputObjectSchema } from "./UsuarioMinOrderByAggregateInput.schema.ts";
import { UsuarioSumOrderByAggregateInputObjectSchema as UsuarioSumOrderByAggregateInputObjectSchema } from "./UsuarioSumOrderByAggregateInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			userName: SortOrderSchema.optional(),
			email: SortOrderSchema.optional(),
			password: SortOrderSchema.optional(),
			nivel: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
			_count: z
				.lazy(() => UsuarioCountOrderByAggregateInputObjectSchema)
				.optional(),
			_avg: z
				.lazy(() => UsuarioAvgOrderByAggregateInputObjectSchema)
				.optional(),
			_max: z
				.lazy(() => UsuarioMaxOrderByAggregateInputObjectSchema)
				.optional(),
			_min: z
				.lazy(() => UsuarioMinOrderByAggregateInputObjectSchema)
				.optional(),
			_sum: z
				.lazy(() => UsuarioSumOrderByAggregateInputObjectSchema)
				.optional(),
		})
		.strict();
export const UsuarioOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.UsuarioOrderByWithAggregationInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioOrderByWithAggregationInput>;
export const UsuarioOrderByWithAggregationInputObjectZodSchema = makeSchema();
