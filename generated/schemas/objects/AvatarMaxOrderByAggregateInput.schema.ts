import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			nombre: SortOrderSchema.optional(),
			url: SortOrderSchema.optional(),
		})
		.strict();
export const AvatarMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AvatarMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AvatarMaxOrderByAggregateInput>;
export const AvatarMaxOrderByAggregateInputObjectZodSchema = makeSchema();
