import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			libroId: z.literal(true).optional(),
			escritorId: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
		})
		.strict();
export const GlosarioAvgAggregateInputObjectSchema: z.ZodType<Prisma.GlosarioAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GlosarioAvgAggregateInputType>;
export const GlosarioAvgAggregateInputObjectZodSchema = makeSchema();
