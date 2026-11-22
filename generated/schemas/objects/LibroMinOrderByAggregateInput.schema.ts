import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			titulo: SortOrderSchema.optional(),
			resumen: SortOrderSchema.optional(),
			portada: SortOrderSchema.optional(),
			publicado: SortOrderSchema.optional(),
			fechaPublicacion: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			escritorId: SortOrderSchema.optional(),
			tipoId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
			idiomaId: SortOrderSchema.optional(),
		})
		.strict();
export const LibroMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LibroMinOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroMinOrderByAggregateInput>;
export const LibroMinOrderByAggregateInputObjectZodSchema = makeSchema();
