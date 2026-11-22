import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			nombre: SortOrderSchema.optional(),
			tabla: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const TipoMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TipoMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TipoMaxOrderByAggregateInput>;
export const TipoMaxOrderByAggregateInputObjectZodSchema = makeSchema();
