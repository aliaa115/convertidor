import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			nombre: z.literal(true).optional(),
			siglas: z.literal(true).optional(),
			createdAt: z.literal(true).optional(),
			updatedAt: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
			_all: z.literal(true).optional(),
		})
		.strict();
export const IdiomaCountAggregateInputObjectSchema: z.ZodType<Prisma.IdiomaCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.IdiomaCountAggregateInputType>;
export const IdiomaCountAggregateInputObjectZodSchema = makeSchema();
