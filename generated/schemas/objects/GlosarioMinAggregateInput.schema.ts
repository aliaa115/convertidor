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
		})
		.strict();
export const GlosarioMinAggregateInputObjectSchema: z.ZodType<Prisma.GlosarioMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GlosarioMinAggregateInputType>;
export const GlosarioMinAggregateInputObjectZodSchema = makeSchema();
