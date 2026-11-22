import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
		})
		.strict();
export const TipoSumAggregateInputObjectSchema: z.ZodType<Prisma.TipoSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TipoSumAggregateInputType>;
export const TipoSumAggregateInputObjectZodSchema = makeSchema();
