import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			_count: SortOrderSchema.optional(),
		})
		.strict();
export const MarcadorOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.MarcadorOrderByRelationAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.MarcadorOrderByRelationAggregateInput>;
export const MarcadorOrderByRelationAggregateInputObjectZodSchema = makeSchema();
