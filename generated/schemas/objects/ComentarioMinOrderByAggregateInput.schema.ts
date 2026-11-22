import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
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
export const ComentarioMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ComentarioMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ComentarioMinOrderByAggregateInput>;
export const ComentarioMinOrderByAggregateInputObjectZodSchema = makeSchema();
