import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
		})
		.strict();
export const TipoAvgAggregateInputObjectSchema: z.ZodType<Prisma.TipoAvgAggregateInputType> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoAvgAggregateInputType>;
export const TipoAvgAggregateInputObjectZodSchema = makeSchema();
