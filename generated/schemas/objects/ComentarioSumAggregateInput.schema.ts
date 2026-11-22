import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			escritorId: z.literal(true).optional(),
			parrafoId: z.literal(true).optional(),
			comentarioPadreId: z.literal(true).optional(),
			tipoId: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
		})
		.strict();
export const ComentarioSumAggregateInputObjectSchema: z.ZodType<Prisma.ComentarioSumAggregateInputType> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioSumAggregateInputType>;
export const ComentarioSumAggregateInputObjectZodSchema = makeSchema();
