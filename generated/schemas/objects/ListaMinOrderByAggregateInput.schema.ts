import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			nombre: SortOrderSchema.optional(),
			privada: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			usuarioId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const ListaMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ListaMinOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaMinOrderByAggregateInput>;
export const ListaMinOrderByAggregateInputObjectZodSchema = makeSchema();
