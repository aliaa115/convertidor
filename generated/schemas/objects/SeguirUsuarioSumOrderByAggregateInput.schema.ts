import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
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
export const SeguirUsuarioSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioSumOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioSumOrderByAggregateInput>;
export const SeguirUsuarioSumOrderByAggregateInputObjectZodSchema =
	makeSchema();
