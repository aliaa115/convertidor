import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			escritorId: z.literal(true).optional(),
			capituloId: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
		})
		.strict();
export const NotaAutorAvgAggregateInputObjectSchema: z.ZodType<Prisma.NotaAutorAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.NotaAutorAvgAggregateInputType>;
export const NotaAutorAvgAggregateInputObjectZodSchema = makeSchema();
