import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
		})
		.strict();
export const EstadoSumAggregateInputObjectSchema: z.ZodType<Prisma.EstadoSumAggregateInputType> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoSumAggregateInputType>;
export const EstadoSumAggregateInputObjectZodSchema = makeSchema();
