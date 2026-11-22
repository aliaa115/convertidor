import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
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
export const ListaCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ListaCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaCountOrderByAggregateInput>;
export const ListaCountOrderByAggregateInputObjectZodSchema = makeSchema();
