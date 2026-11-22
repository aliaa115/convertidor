import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
		})
		.strict();
export const IdiomaSumAggregateInputObjectSchema: z.ZodType<Prisma.IdiomaSumAggregateInputType> =
	makeSchema() as unknown as z.ZodType<Prisma.IdiomaSumAggregateInputType>;
export const IdiomaSumAggregateInputObjectZodSchema = makeSchema();
