import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			userName: z.literal(true).optional(),
			email: z.literal(true).optional(),
			password: z.literal(true).optional(),
			nivel: z.literal(true).optional(),
			createdAt: z.literal(true).optional(),
			updatedAt: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
			_all: z.literal(true).optional(),
		})
		.strict();
export const UsuarioCountAggregateInputObjectSchema: z.ZodType<Prisma.UsuarioCountAggregateInputType> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioCountAggregateInputType>;
export const UsuarioCountAggregateInputObjectZodSchema = makeSchema();
