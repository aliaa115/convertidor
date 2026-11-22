import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			usuarioId: SortOrderSchema.optional(),
			tipoId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const ConfiguracionSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ConfiguracionSumOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionSumOrderByAggregateInput>;
export const ConfiguracionSumOrderByAggregateInputObjectZodSchema = makeSchema();
