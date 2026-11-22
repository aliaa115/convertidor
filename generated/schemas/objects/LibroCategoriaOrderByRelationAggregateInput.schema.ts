import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			_count: SortOrderSchema.optional(),
		})
		.strict();
export const LibroCategoriaOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.LibroCategoriaOrderByRelationAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaOrderByRelationAggregateInput>;
export const LibroCategoriaOrderByRelationAggregateInputObjectZodSchema =
	makeSchema();
