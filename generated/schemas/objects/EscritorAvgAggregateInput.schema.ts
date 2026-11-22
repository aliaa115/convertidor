import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			usuarioId: z.literal(true).optional(),
			avatarId: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
		})
		.strict();
export const EscritorAvgAggregateInputObjectSchema: z.ZodType<Prisma.EscritorAvgAggregateInputType> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorAvgAggregateInputType>;
export const EscritorAvgAggregateInputObjectZodSchema = makeSchema();
