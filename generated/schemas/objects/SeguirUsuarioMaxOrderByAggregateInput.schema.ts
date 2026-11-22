import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
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
export const SeguirUsuarioMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioMaxOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioMaxOrderByAggregateInput>;
export const SeguirUsuarioMaxOrderByAggregateInputObjectZodSchema =
	makeSchema();
