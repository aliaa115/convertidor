import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			indice: SortOrderSchema.optional(),
			capituloId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const ParrafoSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ParrafoSumOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoSumOrderByAggregateInput>;
export const ParrafoSumOrderByAggregateInputObjectZodSchema = makeSchema();
