import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { ConfiguracionAvgOrderByAggregateInputObjectSchema as ConfiguracionAvgOrderByAggregateInputObjectSchema } from "./ConfiguracionAvgOrderByAggregateInput.schema.ts";
import { ConfiguracionCountOrderByAggregateInputObjectSchema as ConfiguracionCountOrderByAggregateInputObjectSchema } from "./ConfiguracionCountOrderByAggregateInput.schema.ts";
import { ConfiguracionMaxOrderByAggregateInputObjectSchema as ConfiguracionMaxOrderByAggregateInputObjectSchema } from "./ConfiguracionMaxOrderByAggregateInput.schema.ts";
import { ConfiguracionMinOrderByAggregateInputObjectSchema as ConfiguracionMinOrderByAggregateInputObjectSchema } from "./ConfiguracionMinOrderByAggregateInput.schema.ts";
import { ConfiguracionSumOrderByAggregateInputObjectSchema as ConfiguracionSumOrderByAggregateInputObjectSchema } from "./ConfiguracionSumOrderByAggregateInput.schema.ts";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			valor: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			usuarioId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			tipoId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			estadoId: SortOrderSchema.optional(),
			_count: z.lazy(() => ConfiguracionCountOrderByAggregateInputObjectSchema).optional(),
			_avg: z.lazy(() => ConfiguracionAvgOrderByAggregateInputObjectSchema).optional(),
			_max: z.lazy(() => ConfiguracionMaxOrderByAggregateInputObjectSchema).optional(),
			_min: z.lazy(() => ConfiguracionMinOrderByAggregateInputObjectSchema).optional(),
			_sum: z.lazy(() => ConfiguracionSumOrderByAggregateInputObjectSchema).optional(),
		})
		.strict();
export const ConfiguracionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ConfiguracionOrderByWithAggregationInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionOrderByWithAggregationInput>;
export const ConfiguracionOrderByWithAggregationInputObjectZodSchema = makeSchema();
