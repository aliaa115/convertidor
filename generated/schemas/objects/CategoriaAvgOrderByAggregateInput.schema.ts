import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const CategoriaAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CategoriaAvgOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CategoriaAvgOrderByAggregateInput>;
export const CategoriaAvgOrderByAggregateInputObjectZodSchema = makeSchema();
