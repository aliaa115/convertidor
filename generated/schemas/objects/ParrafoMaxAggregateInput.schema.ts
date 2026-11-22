import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

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
		})
		.strict();
export const ParrafoMaxAggregateInputObjectSchema: z.ZodType<Prisma.ParrafoMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ParrafoMaxAggregateInputType>;
export const ParrafoMaxAggregateInputObjectZodSchema = makeSchema();
