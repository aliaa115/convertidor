import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			nombre: z.literal(true).optional(),
			privada: z.literal(true).optional(),
			createdAt: z.literal(true).optional(),
			updatedAt: z.literal(true).optional(),
			usuarioId: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
		})
		.strict();
export const ListaMinAggregateInputObjectSchema: z.ZodType<Prisma.ListaMinAggregateInputType> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaMinAggregateInputType>;
export const ListaMinAggregateInputObjectZodSchema = makeSchema();
