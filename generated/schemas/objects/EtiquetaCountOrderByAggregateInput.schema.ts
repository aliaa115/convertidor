import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
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
export const EtiquetaCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EtiquetaCountOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EtiquetaCountOrderByAggregateInput>;
export const EtiquetaCountOrderByAggregateInputObjectZodSchema = makeSchema();
