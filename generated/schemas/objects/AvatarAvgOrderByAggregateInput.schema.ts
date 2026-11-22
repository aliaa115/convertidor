import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
		})
		.strict();
export const AvatarAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AvatarAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AvatarAvgOrderByAggregateInput>;
export const AvatarAvgOrderByAggregateInputObjectZodSchema = makeSchema();
