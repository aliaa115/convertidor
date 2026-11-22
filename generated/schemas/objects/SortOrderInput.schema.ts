import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { NullsOrderSchema } from "../enums/NullsOrder.schema.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			sort: SortOrderSchema,
			nulls: NullsOrderSchema.optional(),
		})
		.strict();
export const SortOrderInputObjectSchema: z.ZodType<Prisma.SortOrderInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SortOrderInput>;
export const SortOrderInputObjectZodSchema = makeSchema();
