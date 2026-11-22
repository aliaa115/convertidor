import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			userName: SortOrderSchema.optional(),
			email: SortOrderSchema.optional(),
			password: SortOrderSchema.optional(),
			nivel: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const UsuarioMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UsuarioMaxOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioMaxOrderByAggregateInput>;
export const UsuarioMaxOrderByAggregateInputObjectZodSchema = makeSchema();
