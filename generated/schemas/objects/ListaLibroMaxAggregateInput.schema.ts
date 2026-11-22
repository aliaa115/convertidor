import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			createdAt: z.literal(true).optional(),
			updatedAt: z.literal(true).optional(),
			listaId: z.literal(true).optional(),
			libroId: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
		})
		.strict();
export const ListaLibroMaxAggregateInputObjectSchema: z.ZodType<Prisma.ListaLibroMaxAggregateInputType> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaLibroMaxAggregateInputType>;
export const ListaLibroMaxAggregateInputObjectZodSchema = makeSchema();
