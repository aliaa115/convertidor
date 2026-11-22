import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
		})
		.strict();
export const EstadoSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EstadoSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoSumOrderByAggregateInput>;
export const EstadoSumOrderByAggregateInputObjectZodSchema = makeSchema();
