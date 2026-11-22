import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			createdAt: z.literal(true).optional(),
			updatedAt: z.literal(true).optional(),
			escritorId: z.literal(true).optional(),
			escritorSeguidoId: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
			_all: z.literal(true).optional(),
		})
		.strict();
export const SeguirUsuarioCountAggregateInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioCountAggregateInputType> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioCountAggregateInputType>;
export const SeguirUsuarioCountAggregateInputObjectZodSchema = makeSchema();
