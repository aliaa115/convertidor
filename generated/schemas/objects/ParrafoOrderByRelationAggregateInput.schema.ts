import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			_count: SortOrderSchema.optional(),
		})
		.strict();
export const ParrafoOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ParrafoOrderByRelationAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoOrderByRelationAggregateInput>;
export const ParrafoOrderByRelationAggregateInputObjectZodSchema = makeSchema();
