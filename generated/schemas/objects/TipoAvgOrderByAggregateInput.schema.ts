import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const TipoAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TipoAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TipoAvgOrderByAggregateInput>;
export const TipoAvgOrderByAggregateInputObjectZodSchema = makeSchema();
