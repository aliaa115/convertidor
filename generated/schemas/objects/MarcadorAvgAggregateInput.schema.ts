import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			escritorId: z.literal(true).optional(),
			parrafoId: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
		})
		.strict();
export const MarcadorAvgAggregateInputObjectSchema: z.ZodType<Prisma.MarcadorAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MarcadorAvgAggregateInputType>;
export const MarcadorAvgAggregateInputObjectZodSchema = makeSchema();
