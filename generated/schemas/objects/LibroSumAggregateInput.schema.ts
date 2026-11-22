import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			escritorId: z.literal(true).optional(),
			tipoId: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
			idiomaId: z.literal(true).optional(),
		})
		.strict();
export const LibroSumAggregateInputObjectSchema: z.ZodType<Prisma.LibroSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LibroSumAggregateInputType>;
export const LibroSumAggregateInputObjectZodSchema = makeSchema();
