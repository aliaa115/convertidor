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
export const LibroEtiquetaSumAggregateInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaSumAggregateInputType>;
export const LibroEtiquetaSumAggregateInputObjectZodSchema = makeSchema();
