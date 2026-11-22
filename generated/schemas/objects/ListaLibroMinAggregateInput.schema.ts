import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

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
export const ListaLibroMinAggregateInputObjectSchema: z.ZodType<Prisma.ListaLibroMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ListaLibroMinAggregateInputType>;
export const ListaLibroMinAggregateInputObjectZodSchema = makeSchema();
