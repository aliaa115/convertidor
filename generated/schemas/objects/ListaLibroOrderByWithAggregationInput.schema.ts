import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { ListaLibroAvgOrderByAggregateInputObjectSchema as ListaLibroAvgOrderByAggregateInputObjectSchema } from "./ListaLibroAvgOrderByAggregateInput.schema.ts";
import { ListaLibroCountOrderByAggregateInputObjectSchema as ListaLibroCountOrderByAggregateInputObjectSchema } from "./ListaLibroCountOrderByAggregateInput.schema.ts";
import { ListaLibroMaxOrderByAggregateInputObjectSchema as ListaLibroMaxOrderByAggregateInputObjectSchema } from "./ListaLibroMaxOrderByAggregateInput.schema.ts";
import { ListaLibroMinOrderByAggregateInputObjectSchema as ListaLibroMinOrderByAggregateInputObjectSchema } from "./ListaLibroMinOrderByAggregateInput.schema.ts";
import { ListaLibroSumOrderByAggregateInputObjectSchema as ListaLibroSumOrderByAggregateInputObjectSchema } from "./ListaLibroSumOrderByAggregateInput.schema.ts";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			listaId: z
				.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
				.optional(),
			libroId: z
				.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
				.optional(),
			estadoId: SortOrderSchema.optional(),
			_count: z
				.lazy(() => ListaLibroCountOrderByAggregateInputObjectSchema)
				.optional(),
			_avg: z
				.lazy(() => ListaLibroAvgOrderByAggregateInputObjectSchema)
				.optional(),
			_max: z
				.lazy(() => ListaLibroMaxOrderByAggregateInputObjectSchema)
				.optional(),
			_min: z
				.lazy(() => ListaLibroMinOrderByAggregateInputObjectSchema)
				.optional(),
			_sum: z
				.lazy(() => ListaLibroSumOrderByAggregateInputObjectSchema)
				.optional(),
		})
		.strict();
export const ListaLibroOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ListaLibroOrderByWithAggregationInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaLibroOrderByWithAggregationInput>;
export const ListaLibroOrderByWithAggregationInputObjectZodSchema =
	makeSchema();
