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
export const UsuarioAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UsuarioAvgOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioAvgOrderByAggregateInput>;
export const UsuarioAvgOrderByAggregateInputObjectZodSchema = makeSchema();
