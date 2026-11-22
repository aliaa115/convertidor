import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			nombre: SortOrderSchema.optional(),
			url: SortOrderSchema.optional(),
		})
		.strict();
export const AvatarMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AvatarMinOrderByAggregateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.AvatarMinOrderByAggregateInput>;
export const AvatarMinOrderByAggregateInputObjectZodSchema = makeSchema();
