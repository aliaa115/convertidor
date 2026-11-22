import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			escritorId: SortOrderSchema.optional(),
			escritorSeguidoId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const SeguirUsuarioAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioAvgOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioAvgOrderByAggregateInput>;
export const SeguirUsuarioAvgOrderByAggregateInputObjectZodSchema = makeSchema();
