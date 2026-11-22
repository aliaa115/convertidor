import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			nombre: SortOrderSchema.optional(),
			color: SortOrderSchema.optional(),
			icon: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
		})
		.strict();
export const EstadoMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EstadoMinOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoMinOrderByAggregateInput>;
export const EstadoMinOrderByAggregateInputObjectZodSchema = makeSchema();
