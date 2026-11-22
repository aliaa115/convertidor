import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			nombre: z.literal(true).optional(),
			createdAt: z.literal(true).optional(),
			updatedAt: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
			_all: z.literal(true).optional(),
		})
		.strict();
export const CategoriaCountAggregateInputObjectSchema: z.ZodType<Prisma.CategoriaCountAggregateInputType> =
	makeSchema() as unknown as z.ZodType<Prisma.CategoriaCountAggregateInputType>;
export const CategoriaCountAggregateInputObjectZodSchema = makeSchema();
