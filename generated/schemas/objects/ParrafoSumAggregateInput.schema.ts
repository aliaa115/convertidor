import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			indice: z.literal(true).optional(),
			capituloId: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
		})
		.strict();
export const ParrafoSumAggregateInputObjectSchema: z.ZodType<Prisma.ParrafoSumAggregateInputType> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoSumAggregateInputType>;
export const ParrafoSumAggregateInputObjectZodSchema = makeSchema();
