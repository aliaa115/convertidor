import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			_count: SortOrderSchema.optional(),
		})
		.strict();
export const LibroEtiquetaOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaOrderByRelationAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaOrderByRelationAggregateInput>;
export const LibroEtiquetaOrderByRelationAggregateInputObjectZodSchema =
	makeSchema();
