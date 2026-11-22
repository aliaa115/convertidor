import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			libroId: z.literal(true).optional(),
			escritorId: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
		})
		.strict();
export const GlosarioSumAggregateInputObjectSchema: z.ZodType<Prisma.GlosarioSumAggregateInputType> =
	makeSchema() as unknown as z.ZodType<Prisma.GlosarioSumAggregateInputType>;
export const GlosarioSumAggregateInputObjectZodSchema = makeSchema();
