import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			libroId: z.literal(true).optional(),
			etiquetaId: z.literal(true).optional(),
			createdAt: z.literal(true).optional(),
			updatedAt: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
			_all: z.literal(true).optional(),
		})
		.strict();
export const LibroEtiquetaCountAggregateInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaCountAggregateInputType> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaCountAggregateInputType>;
export const LibroEtiquetaCountAggregateInputObjectZodSchema = makeSchema();
