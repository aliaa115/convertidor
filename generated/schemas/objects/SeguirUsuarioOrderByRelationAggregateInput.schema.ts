import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			_count: SortOrderSchema.optional(),
		})
		.strict();
export const SeguirUsuarioOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioOrderByRelationAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioOrderByRelationAggregateInput>;
export const SeguirUsuarioOrderByRelationAggregateInputObjectZodSchema = makeSchema();
