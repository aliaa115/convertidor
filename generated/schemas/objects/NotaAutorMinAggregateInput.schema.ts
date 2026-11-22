import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			texto: z.literal(true).optional(),
			createdAt: z.literal(true).optional(),
			updatedAt: z.literal(true).optional(),
			escritorId: z.literal(true).optional(),
			capituloId: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
		})
		.strict();
export const NotaAutorMinAggregateInputObjectSchema: z.ZodType<Prisma.NotaAutorMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.NotaAutorMinAggregateInputType>;
export const NotaAutorMinAggregateInputObjectZodSchema = makeSchema();
