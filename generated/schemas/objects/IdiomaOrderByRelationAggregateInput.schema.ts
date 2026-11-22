import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			_count: SortOrderSchema.optional(),
		})
		.strict();
export const IdiomaOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.IdiomaOrderByRelationAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.IdiomaOrderByRelationAggregateInput>;
export const IdiomaOrderByRelationAggregateInputObjectZodSchema = makeSchema();
