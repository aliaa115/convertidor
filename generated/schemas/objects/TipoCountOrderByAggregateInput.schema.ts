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
export const TipoCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TipoCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TipoCountOrderByAggregateInput>;
export const TipoCountOrderByAggregateInputObjectZodSchema = makeSchema();
