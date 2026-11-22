import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			nombre: SortOrderSchema.optional(),
			color: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			escritorId: SortOrderSchema.optional(),
			parrafoId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const MarcadorMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MarcadorMinOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.MarcadorMinOrderByAggregateInput>;
export const MarcadorMinOrderByAggregateInputObjectZodSchema = makeSchema();
