import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { NotificacionAvgOrderByAggregateInputObjectSchema as NotificacionAvgOrderByAggregateInputObjectSchema } from "./NotificacionAvgOrderByAggregateInput.schema.ts";
import { NotificacionCountOrderByAggregateInputObjectSchema as NotificacionCountOrderByAggregateInputObjectSchema } from "./NotificacionCountOrderByAggregateInput.schema.ts";
import { NotificacionMaxOrderByAggregateInputObjectSchema as NotificacionMaxOrderByAggregateInputObjectSchema } from "./NotificacionMaxOrderByAggregateInput.schema.ts";
import { NotificacionMinOrderByAggregateInputObjectSchema as NotificacionMinOrderByAggregateInputObjectSchema } from "./NotificacionMinOrderByAggregateInput.schema.ts";
import { NotificacionSumOrderByAggregateInputObjectSchema as NotificacionSumOrderByAggregateInputObjectSchema } from "./NotificacionSumOrderByAggregateInput.schema.ts";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			titulo: SortOrderSchema.optional(),
			mensaje: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			tipo: SortOrderSchema.optional(),
			leida: SortOrderSchema.optional(),
			usuarioId: SortOrderSchema.optional(),
			entidadId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			entidadTipo: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			_count: z.lazy(() => NotificacionCountOrderByAggregateInputObjectSchema).optional(),
			_avg: z.lazy(() => NotificacionAvgOrderByAggregateInputObjectSchema).optional(),
			_max: z.lazy(() => NotificacionMaxOrderByAggregateInputObjectSchema).optional(),
			_min: z.lazy(() => NotificacionMinOrderByAggregateInputObjectSchema).optional(),
			_sum: z.lazy(() => NotificacionSumOrderByAggregateInputObjectSchema).optional(),
		})
		.strict();
export const NotificacionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.NotificacionOrderByWithAggregationInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotificacionOrderByWithAggregationInput>;
export const NotificacionOrderByWithAggregationInputObjectZodSchema = makeSchema();
