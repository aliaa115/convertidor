import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			nombres: SortOrderSchema.optional(),
			apellidos: SortOrderSchema.optional(),
			alias: SortOrderSchema.optional(),
			descripcion: SortOrderSchema.optional(),
			fechaNacimiento: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			usuarioId: SortOrderSchema.optional(),
			avatarId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
		})
		.strict();
export const EscritorCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EscritorCountOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorCountOrderByAggregateInput>;
export const EscritorCountOrderByAggregateInputObjectZodSchema = makeSchema();
