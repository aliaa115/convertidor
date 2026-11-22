import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			usuarioId: z.literal(true).optional(),
			tipoId: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
		})
		.strict();
export const ConfiguracionAvgAggregateInputObjectSchema: z.ZodType<Prisma.ConfiguracionAvgAggregateInputType> =
	makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionAvgAggregateInputType>;
export const ConfiguracionAvgAggregateInputObjectZodSchema = makeSchema();
