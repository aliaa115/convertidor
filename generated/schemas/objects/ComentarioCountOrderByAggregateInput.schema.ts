import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			contenido: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			escritorId: SortOrderSchema.optional(),
			parrafoId: SortOrderSchema.optional(),
			comentarioPadreId: SortOrderSchema.optional(),
			tipoId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const ComentarioCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ComentarioCountOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioCountOrderByAggregateInput>;
export const ComentarioCountOrderByAggregateInputObjectZodSchema = makeSchema();
