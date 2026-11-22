import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			_count: SortOrderSchema.optional(),
		})
		.strict();
export const NotaAutorOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.NotaAutorOrderByRelationAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotaAutorOrderByRelationAggregateInput>;
export const NotaAutorOrderByRelationAggregateInputObjectZodSchema = makeSchema();
