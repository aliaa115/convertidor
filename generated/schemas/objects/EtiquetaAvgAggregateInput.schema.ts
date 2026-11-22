import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
		})
		.strict();
export const EtiquetaAvgAggregateInputObjectSchema: z.ZodType<Prisma.EtiquetaAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EtiquetaAvgAggregateInputType>;
export const EtiquetaAvgAggregateInputObjectZodSchema = makeSchema();
