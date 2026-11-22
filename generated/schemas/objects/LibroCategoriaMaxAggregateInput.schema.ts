import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			libroId: z.literal(true).optional(),
			categoriaId: z.literal(true).optional(),
			createdAt: z.literal(true).optional(),
			updatedAt: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
		})
		.strict();
export const LibroCategoriaMaxAggregateInputObjectSchema: z.ZodType<Prisma.LibroCategoriaMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaMaxAggregateInputType>;
export const LibroCategoriaMaxAggregateInputObjectZodSchema = makeSchema();
