import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			libroId: z.literal(true).optional(),
			etiquetaId: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
		})
		.strict();
export const LibroEtiquetaAvgAggregateInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaAvgAggregateInputType>;
export const LibroEtiquetaAvgAggregateInputObjectZodSchema = makeSchema();
