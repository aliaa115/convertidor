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
export const AvatarCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AvatarCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AvatarCountOrderByAggregateInput>;
export const AvatarCountOrderByAggregateInputObjectZodSchema = makeSchema();
