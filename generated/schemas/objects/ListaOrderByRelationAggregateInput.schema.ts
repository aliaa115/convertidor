import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			_count: SortOrderSchema.optional(),
		})
		.strict();
export const ListaOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ListaOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaOrderByRelationAggregateInput>;
export const ListaOrderByRelationAggregateInputObjectZodSchema = makeSchema();
