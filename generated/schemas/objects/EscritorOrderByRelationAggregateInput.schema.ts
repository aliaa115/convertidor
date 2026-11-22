import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			_count: SortOrderSchema.optional(),
		})
		.strict();
export const EscritorOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.EscritorOrderByRelationAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorOrderByRelationAggregateInput>;
export const EscritorOrderByRelationAggregateInputObjectZodSchema = makeSchema();
