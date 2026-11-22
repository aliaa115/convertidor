import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			libroId: SortOrderSchema.optional(),
			escritorId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const GlosarioAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GlosarioAvgOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.GlosarioAvgOrderByAggregateInput>;
export const GlosarioAvgOrderByAggregateInputObjectZodSchema = makeSchema();
