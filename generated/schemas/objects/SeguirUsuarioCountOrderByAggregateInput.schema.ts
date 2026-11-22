import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			escritorId: SortOrderSchema.optional(),
			escritorSeguidoId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const SeguirUsuarioCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioCountOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioCountOrderByAggregateInput>;
export const SeguirUsuarioCountOrderByAggregateInputObjectZodSchema = makeSchema();
