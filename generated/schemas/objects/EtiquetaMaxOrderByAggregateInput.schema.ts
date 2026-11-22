import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			nombre: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const EtiquetaMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EtiquetaMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EtiquetaMaxOrderByAggregateInput>;
export const EtiquetaMaxOrderByAggregateInputObjectZodSchema = makeSchema();
