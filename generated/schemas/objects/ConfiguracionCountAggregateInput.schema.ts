import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			valor: z.literal(true).optional(),
			createdAt: z.literal(true).optional(),
			updatedAt: z.literal(true).optional(),
			usuarioId: z.literal(true).optional(),
			tipoId: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
			_all: z.literal(true).optional(),
		})
		.strict();
export const ConfiguracionCountAggregateInputObjectSchema: z.ZodType<Prisma.ConfiguracionCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionCountAggregateInputType>;
export const ConfiguracionCountAggregateInputObjectZodSchema = makeSchema();
