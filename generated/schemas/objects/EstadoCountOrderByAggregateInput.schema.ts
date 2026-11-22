import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
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
export const EstadoCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EstadoCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoCountOrderByAggregateInput>;
export const EstadoCountOrderByAggregateInputObjectZodSchema = makeSchema();
