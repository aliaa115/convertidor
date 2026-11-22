import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

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
		})
		.strict();
export const UsuarioMaxAggregateInputObjectSchema: z.ZodType<Prisma.UsuarioMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioMaxAggregateInputType>;
export const UsuarioMaxAggregateInputObjectZodSchema = makeSchema();
