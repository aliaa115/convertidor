import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			indice: z.literal(true).optional(),
			libroId: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
		})
		.strict();
export const CapituloAvgAggregateInputObjectSchema: z.ZodType<Prisma.CapituloAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CapituloAvgAggregateInputType>;
export const CapituloAvgAggregateInputObjectZodSchema = makeSchema();
