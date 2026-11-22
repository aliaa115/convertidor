import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
		})
		.strict();
export const IdiomaAvgAggregateInputObjectSchema: z.ZodType<Prisma.IdiomaAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.IdiomaAvgAggregateInputType>;
export const IdiomaAvgAggregateInputObjectZodSchema = makeSchema();
