import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { NotaAutorAvgOrderByAggregateInputObjectSchema as NotaAutorAvgOrderByAggregateInputObjectSchema } from "./NotaAutorAvgOrderByAggregateInput.schema.ts";
import { NotaAutorCountOrderByAggregateInputObjectSchema as NotaAutorCountOrderByAggregateInputObjectSchema } from "./NotaAutorCountOrderByAggregateInput.schema.ts";
import { NotaAutorMaxOrderByAggregateInputObjectSchema as NotaAutorMaxOrderByAggregateInputObjectSchema } from "./NotaAutorMaxOrderByAggregateInput.schema.ts";
import { NotaAutorMinOrderByAggregateInputObjectSchema as NotaAutorMinOrderByAggregateInputObjectSchema } from "./NotaAutorMinOrderByAggregateInput.schema.ts";
import { NotaAutorSumOrderByAggregateInputObjectSchema as NotaAutorSumOrderByAggregateInputObjectSchema } from "./NotaAutorSumOrderByAggregateInput.schema.ts";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			texto: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			escritorId: SortOrderSchema.optional(),
			capituloId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
			_count: z.lazy(() => NotaAutorCountOrderByAggregateInputObjectSchema).optional(),
			_avg: z.lazy(() => NotaAutorAvgOrderByAggregateInputObjectSchema).optional(),
			_max: z.lazy(() => NotaAutorMaxOrderByAggregateInputObjectSchema).optional(),
			_min: z.lazy(() => NotaAutorMinOrderByAggregateInputObjectSchema).optional(),
			_sum: z.lazy(() => NotaAutorSumOrderByAggregateInputObjectSchema).optional(),
		})
		.strict();
export const NotaAutorOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.NotaAutorOrderByWithAggregationInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotaAutorOrderByWithAggregationInput>;
export const NotaAutorOrderByWithAggregationInputObjectZodSchema = makeSchema();
