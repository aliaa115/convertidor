import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
		})
		.strict();
export const EstadoAvgAggregateInputObjectSchema: z.ZodType<Prisma.EstadoAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EstadoAvgAggregateInputType>;
export const EstadoAvgAggregateInputObjectZodSchema = makeSchema();
