import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			usuarioId: z.literal(true).optional(),
			tipoId: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
		})
		.strict();
export const ConfiguracionSumAggregateInputObjectSchema: z.ZodType<Prisma.ConfiguracionSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionSumAggregateInputType>;
export const ConfiguracionSumAggregateInputObjectZodSchema = makeSchema();
