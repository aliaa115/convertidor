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
export const TipoSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TipoSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TipoSumOrderByAggregateInput>;
export const TipoSumOrderByAggregateInputObjectZodSchema = makeSchema();
