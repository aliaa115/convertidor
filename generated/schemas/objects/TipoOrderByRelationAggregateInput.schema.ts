import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			_count: SortOrderSchema.optional(),
		})
		.strict();
export const TipoOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.TipoOrderByRelationAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoOrderByRelationAggregateInput>;
export const TipoOrderByRelationAggregateInputObjectZodSchema = makeSchema();
