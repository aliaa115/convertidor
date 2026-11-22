import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { AvatarAvgOrderByAggregateInputObjectSchema as AvatarAvgOrderByAggregateInputObjectSchema } from "./AvatarAvgOrderByAggregateInput.schema.ts";
import { AvatarCountOrderByAggregateInputObjectSchema as AvatarCountOrderByAggregateInputObjectSchema } from "./AvatarCountOrderByAggregateInput.schema.ts";
import { AvatarMaxOrderByAggregateInputObjectSchema as AvatarMaxOrderByAggregateInputObjectSchema } from "./AvatarMaxOrderByAggregateInput.schema.ts";
import { AvatarMinOrderByAggregateInputObjectSchema as AvatarMinOrderByAggregateInputObjectSchema } from "./AvatarMinOrderByAggregateInput.schema.ts";
import { AvatarSumOrderByAggregateInputObjectSchema as AvatarSumOrderByAggregateInputObjectSchema } from "./AvatarSumOrderByAggregateInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			nombre: SortOrderSchema.optional(),
			url: SortOrderSchema.optional(),
			_count: z
				.lazy(() => AvatarCountOrderByAggregateInputObjectSchema)
				.optional(),
			_avg: z.lazy(() => AvatarAvgOrderByAggregateInputObjectSchema).optional(),
			_max: z.lazy(() => AvatarMaxOrderByAggregateInputObjectSchema).optional(),
			_min: z.lazy(() => AvatarMinOrderByAggregateInputObjectSchema).optional(),
			_sum: z.lazy(() => AvatarSumOrderByAggregateInputObjectSchema).optional(),
		})
		.strict();
export const AvatarOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AvatarOrderByWithAggregationInput> =
	makeSchema() as unknown as z.ZodType<Prisma.AvatarOrderByWithAggregationInput>;
export const AvatarOrderByWithAggregationInputObjectZodSchema = makeSchema();
