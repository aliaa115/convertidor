import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { EscritorAvgOrderByAggregateInputObjectSchema as EscritorAvgOrderByAggregateInputObjectSchema } from "./EscritorAvgOrderByAggregateInput.schema.ts";
import { EscritorCountOrderByAggregateInputObjectSchema as EscritorCountOrderByAggregateInputObjectSchema } from "./EscritorCountOrderByAggregateInput.schema.ts";
import { EscritorMaxOrderByAggregateInputObjectSchema as EscritorMaxOrderByAggregateInputObjectSchema } from "./EscritorMaxOrderByAggregateInput.schema.ts";
import { EscritorMinOrderByAggregateInputObjectSchema as EscritorMinOrderByAggregateInputObjectSchema } from "./EscritorMinOrderByAggregateInput.schema.ts";
import { EscritorSumOrderByAggregateInputObjectSchema as EscritorSumOrderByAggregateInputObjectSchema } from "./EscritorSumOrderByAggregateInput.schema.ts";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			nombres: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			apellidos: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			alias: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			descripcion: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			fechaNacimiento: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			usuarioId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			avatarId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
			_count: z.lazy(() => EscritorCountOrderByAggregateInputObjectSchema).optional(),
			_avg: z.lazy(() => EscritorAvgOrderByAggregateInputObjectSchema).optional(),
			_max: z.lazy(() => EscritorMaxOrderByAggregateInputObjectSchema).optional(),
			_min: z.lazy(() => EscritorMinOrderByAggregateInputObjectSchema).optional(),
			_sum: z.lazy(() => EscritorSumOrderByAggregateInputObjectSchema).optional(),
		})
		.strict();
export const EscritorOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.EscritorOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.EscritorOrderByWithAggregationInput>;
export const EscritorOrderByWithAggregationInputObjectZodSchema = makeSchema();
