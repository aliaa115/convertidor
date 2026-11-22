import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { LibroAvgOrderByAggregateInputObjectSchema as LibroAvgOrderByAggregateInputObjectSchema } from "./LibroAvgOrderByAggregateInput.schema.ts";
import { LibroCountOrderByAggregateInputObjectSchema as LibroCountOrderByAggregateInputObjectSchema } from "./LibroCountOrderByAggregateInput.schema.ts";
import { LibroMaxOrderByAggregateInputObjectSchema as LibroMaxOrderByAggregateInputObjectSchema } from "./LibroMaxOrderByAggregateInput.schema.ts";
import { LibroMinOrderByAggregateInputObjectSchema as LibroMinOrderByAggregateInputObjectSchema } from "./LibroMinOrderByAggregateInput.schema.ts";
import { LibroSumOrderByAggregateInputObjectSchema as LibroSumOrderByAggregateInputObjectSchema } from "./LibroSumOrderByAggregateInput.schema.ts";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			titulo: SortOrderSchema.optional(),
			resumen: SortOrderSchema.optional(),
			portada: z
				.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
				.optional(),
			publicado: SortOrderSchema.optional(),
			fechaPublicacion: z
				.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
				.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			escritorId: SortOrderSchema.optional(),
			tipoId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
			idiomaId: SortOrderSchema.optional(),
			_count: z
				.lazy(() => LibroCountOrderByAggregateInputObjectSchema)
				.optional(),
			_avg: z.lazy(() => LibroAvgOrderByAggregateInputObjectSchema).optional(),
			_max: z.lazy(() => LibroMaxOrderByAggregateInputObjectSchema).optional(),
			_min: z.lazy(() => LibroMinOrderByAggregateInputObjectSchema).optional(),
			_sum: z.lazy(() => LibroSumOrderByAggregateInputObjectSchema).optional(),
		})
		.strict();
export const LibroOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.LibroOrderByWithAggregationInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroOrderByWithAggregationInput>;
export const LibroOrderByWithAggregationInputObjectZodSchema = makeSchema();
