import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			nivel: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const UsuarioSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UsuarioSumOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioSumOrderByAggregateInput>;
export const UsuarioSumOrderByAggregateInputObjectZodSchema = makeSchema();
