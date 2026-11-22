import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
		})
		.strict();
export const EstadoAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EstadoAvgOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoAvgOrderByAggregateInput>;
export const EstadoAvgOrderByAggregateInputObjectZodSchema = makeSchema();
