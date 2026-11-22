import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { ListaAvgOrderByAggregateInputObjectSchema as ListaAvgOrderByAggregateInputObjectSchema } from "./ListaAvgOrderByAggregateInput.schema.ts";
import { ListaCountOrderByAggregateInputObjectSchema as ListaCountOrderByAggregateInputObjectSchema } from "./ListaCountOrderByAggregateInput.schema.ts";
import { ListaMaxOrderByAggregateInputObjectSchema as ListaMaxOrderByAggregateInputObjectSchema } from "./ListaMaxOrderByAggregateInput.schema.ts";
import { ListaMinOrderByAggregateInputObjectSchema as ListaMinOrderByAggregateInputObjectSchema } from "./ListaMinOrderByAggregateInput.schema.ts";
import { ListaSumOrderByAggregateInputObjectSchema as ListaSumOrderByAggregateInputObjectSchema } from "./ListaSumOrderByAggregateInput.schema.ts";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			nombre: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			privada: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			usuarioId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			estadoId: SortOrderSchema.optional(),
			_count: z.lazy(() => ListaCountOrderByAggregateInputObjectSchema).optional(),
			_avg: z.lazy(() => ListaAvgOrderByAggregateInputObjectSchema).optional(),
			_max: z.lazy(() => ListaMaxOrderByAggregateInputObjectSchema).optional(),
			_min: z.lazy(() => ListaMinOrderByAggregateInputObjectSchema).optional(),
			_sum: z.lazy(() => ListaSumOrderByAggregateInputObjectSchema).optional(),
		})
		.strict();
export const ListaOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ListaOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaOrderByWithAggregationInput>;
export const ListaOrderByWithAggregationInputObjectZodSchema = makeSchema();
