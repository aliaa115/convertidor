import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
		})
		.strict();
export const EtiquetaSumAggregateInputObjectSchema: z.ZodType<Prisma.EtiquetaSumAggregateInputType> =
	makeSchema() as unknown as z.ZodType<Prisma.EtiquetaSumAggregateInputType>;
export const EtiquetaSumAggregateInputObjectZodSchema = makeSchema();
