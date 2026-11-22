import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			nivel: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
		})
		.strict();
export const UsuarioAvgAggregateInputObjectSchema: z.ZodType<Prisma.UsuarioAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioAvgAggregateInputType>;
export const UsuarioAvgAggregateInputObjectZodSchema = makeSchema();
