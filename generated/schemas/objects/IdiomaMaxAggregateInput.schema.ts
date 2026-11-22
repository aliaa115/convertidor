import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			nombre: z.literal(true).optional(),
			siglas: z.literal(true).optional(),
			createdAt: z.literal(true).optional(),
			updatedAt: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
		})
		.strict();
export const IdiomaMaxAggregateInputObjectSchema: z.ZodType<Prisma.IdiomaMaxAggregateInputType> =
	makeSchema() as unknown as z.ZodType<Prisma.IdiomaMaxAggregateInputType>;
export const IdiomaMaxAggregateInputObjectZodSchema = makeSchema();
