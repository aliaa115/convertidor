import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			palabra: z.literal(true).optional(),
			significado: z.literal(true).optional(),
			createdAt: z.literal(true).optional(),
			updatedAt: z.literal(true).optional(),
			libroId: z.literal(true).optional(),
			escritorId: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
			_all: z.literal(true).optional(),
		})
		.strict();
export const GlosarioCountAggregateInputObjectSchema: z.ZodType<Prisma.GlosarioCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GlosarioCountAggregateInputType>;
export const GlosarioCountAggregateInputObjectZodSchema = makeSchema();
