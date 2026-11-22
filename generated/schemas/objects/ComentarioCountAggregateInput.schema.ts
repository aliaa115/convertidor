import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			contenido: z.literal(true).optional(),
			createdAt: z.literal(true).optional(),
			updatedAt: z.literal(true).optional(),
			escritorId: z.literal(true).optional(),
			parrafoId: z.literal(true).optional(),
			comentarioPadreId: z.literal(true).optional(),
			tipoId: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
			_all: z.literal(true).optional(),
		})
		.strict();
export const ComentarioCountAggregateInputObjectSchema: z.ZodType<Prisma.ComentarioCountAggregateInputType> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioCountAggregateInputType>;
export const ComentarioCountAggregateInputObjectZodSchema = makeSchema();
