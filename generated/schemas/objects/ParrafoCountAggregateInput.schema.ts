import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			contenido: z.literal(true).optional(),
			indice: z.literal(true).optional(),
			createdAt: z.literal(true).optional(),
			updatedAt: z.literal(true).optional(),
			capituloId: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
			_all: z.literal(true).optional(),
		})
		.strict();
export const ParrafoCountAggregateInputObjectSchema: z.ZodType<Prisma.ParrafoCountAggregateInputType> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoCountAggregateInputType>;
export const ParrafoCountAggregateInputObjectZodSchema = makeSchema();
