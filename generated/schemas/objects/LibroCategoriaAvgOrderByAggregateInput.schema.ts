import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			libroId: SortOrderSchema.optional(),
			categoriaId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const LibroCategoriaAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LibroCategoriaAvgOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaAvgOrderByAggregateInput>;
export const LibroCategoriaAvgOrderByAggregateInputObjectZodSchema =
	makeSchema();
