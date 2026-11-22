import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			listaId: z.literal(true).optional(),
			libroId: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
		})
		.strict();
export const ListaLibroSumAggregateInputObjectSchema: z.ZodType<Prisma.ListaLibroSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ListaLibroSumAggregateInputType>;
export const ListaLibroSumAggregateInputObjectZodSchema = makeSchema();
