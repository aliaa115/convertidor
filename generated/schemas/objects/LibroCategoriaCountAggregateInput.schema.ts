import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			libroId: z.literal(true).optional(),
			categoriaId: z.literal(true).optional(),
			createdAt: z.literal(true).optional(),
			updatedAt: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
			_all: z.literal(true).optional(),
		})
		.strict();
export const LibroCategoriaCountAggregateInputObjectSchema: z.ZodType<Prisma.LibroCategoriaCountAggregateInputType> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaCountAggregateInputType>;
export const LibroCategoriaCountAggregateInputObjectZodSchema = makeSchema();
