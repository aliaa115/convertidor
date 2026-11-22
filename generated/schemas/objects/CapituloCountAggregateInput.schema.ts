import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			nombre: z.literal(true).optional(),
			indice: z.literal(true).optional(),
			createdAt: z.literal(true).optional(),
			updatedAt: z.literal(true).optional(),
			libroId: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
			_all: z.literal(true).optional(),
		})
		.strict();
export const CapituloCountAggregateInputObjectSchema: z.ZodType<Prisma.CapituloCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CapituloCountAggregateInputType>;
export const CapituloCountAggregateInputObjectZodSchema = makeSchema();
