import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { EscritorOrderByRelationAggregateInputObjectSchema as EscritorOrderByRelationAggregateInputObjectSchema } from "./EscritorOrderByRelationAggregateInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			nombre: SortOrderSchema.optional(),
			url: SortOrderSchema.optional(),
			escritores: z
				.lazy(() => EscritorOrderByRelationAggregateInputObjectSchema)
				.optional(),
		})
		.strict();
export const AvatarOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AvatarOrderByWithRelationInput> =
	makeSchema() as unknown as z.ZodType<Prisma.AvatarOrderByWithRelationInput>;
export const AvatarOrderByWithRelationInputObjectZodSchema = makeSchema();
