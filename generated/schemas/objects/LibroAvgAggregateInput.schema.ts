import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

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
export const LibroAvgAggregateInputObjectSchema: z.ZodType<Prisma.LibroAvgAggregateInputType> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroAvgAggregateInputType>;
export const LibroAvgAggregateInputObjectZodSchema = makeSchema();
