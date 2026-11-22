import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			usuarioId: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
		})
		.strict();
export const ListaAvgAggregateInputObjectSchema: z.ZodType<Prisma.ListaAvgAggregateInputType> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaAvgAggregateInputType>;
export const ListaAvgAggregateInputObjectZodSchema = makeSchema();
