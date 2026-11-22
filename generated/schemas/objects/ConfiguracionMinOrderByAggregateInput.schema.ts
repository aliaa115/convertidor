import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			valor: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			usuarioId: SortOrderSchema.optional(),
			tipoId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const ConfiguracionMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ConfiguracionMinOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionMinOrderByAggregateInput>;
export const ConfiguracionMinOrderByAggregateInputObjectZodSchema =
	makeSchema();
