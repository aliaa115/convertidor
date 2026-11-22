import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
		})
		.strict();
export const AvatarSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AvatarSumOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.AvatarSumOrderByAggregateInput>;
export const AvatarSumOrderByAggregateInputObjectZodSchema = makeSchema();
