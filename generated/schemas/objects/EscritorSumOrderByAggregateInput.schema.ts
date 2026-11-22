import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			usuarioId: SortOrderSchema.optional(),
			avatarId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const EscritorSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EscritorSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EscritorSumOrderByAggregateInput>;
export const EscritorSumOrderByAggregateInputObjectZodSchema = makeSchema();
