import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			usuarioId: z.literal(true).optional(),
			avatarId: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
		})
		.strict();
export const EscritorSumAggregateInputObjectSchema: z.ZodType<Prisma.EscritorSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EscritorSumAggregateInputType>;
export const EscritorSumAggregateInputObjectZodSchema = makeSchema();
