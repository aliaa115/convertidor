import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			libroId: z.literal(true).optional(),
			categoriaId: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
		})
		.strict();
export const LibroCategoriaAvgAggregateInputObjectSchema: z.ZodType<Prisma.LibroCategoriaAvgAggregateInputType> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaAvgAggregateInputType>;
export const LibroCategoriaAvgAggregateInputObjectZodSchema = makeSchema();
