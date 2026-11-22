import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			escritorId: z.literal(true).optional(),
			libroId: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
		})
		.strict();
export const FavoritoSumAggregateInputObjectSchema: z.ZodType<Prisma.FavoritoSumAggregateInputType> =
	makeSchema() as unknown as z.ZodType<Prisma.FavoritoSumAggregateInputType>;
export const FavoritoSumAggregateInputObjectZodSchema = makeSchema();
