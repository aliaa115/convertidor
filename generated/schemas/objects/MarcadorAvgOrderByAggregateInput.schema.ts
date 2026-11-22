import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			escritorId: SortOrderSchema.optional(),
			parrafoId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const MarcadorAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MarcadorAvgOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.MarcadorAvgOrderByAggregateInput>;
export const MarcadorAvgOrderByAggregateInputObjectZodSchema = makeSchema();
