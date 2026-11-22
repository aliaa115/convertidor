import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			usuarioId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const ListaAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ListaAvgOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaAvgOrderByAggregateInput>;
export const ListaAvgOrderByAggregateInputObjectZodSchema = makeSchema();
