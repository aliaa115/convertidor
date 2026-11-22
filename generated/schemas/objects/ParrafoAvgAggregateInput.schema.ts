import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			indice: z.literal(true).optional(),
			capituloId: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
		})
		.strict();
export const ParrafoAvgAggregateInputObjectSchema: z.ZodType<Prisma.ParrafoAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ParrafoAvgAggregateInputType>;
export const ParrafoAvgAggregateInputObjectZodSchema = makeSchema();
