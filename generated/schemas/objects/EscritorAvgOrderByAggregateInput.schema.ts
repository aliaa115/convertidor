import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
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
export const EscritorAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EscritorAvgOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorAvgOrderByAggregateInput>;
export const EscritorAvgOrderByAggregateInputObjectZodSchema = makeSchema();
