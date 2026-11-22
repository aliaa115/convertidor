import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
		})
		.strict();
export const CategoriaAvgAggregateInputObjectSchema: z.ZodType<Prisma.CategoriaAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CategoriaAvgAggregateInputType>;
export const CategoriaAvgAggregateInputObjectZodSchema = makeSchema();
