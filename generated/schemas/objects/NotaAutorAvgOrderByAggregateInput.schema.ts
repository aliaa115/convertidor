import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			escritorId: SortOrderSchema.optional(),
			capituloId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const NotaAutorAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.NotaAutorAvgOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotaAutorAvgOrderByAggregateInput>;
export const NotaAutorAvgOrderByAggregateInputObjectZodSchema = makeSchema();
