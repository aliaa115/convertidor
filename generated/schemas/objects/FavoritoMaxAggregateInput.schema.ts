import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			createdAt: z.literal(true).optional(),
			updatedAt: z.literal(true).optional(),
			escritorId: z.literal(true).optional(),
			libroId: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
		})
		.strict();
export const FavoritoMaxAggregateInputObjectSchema: z.ZodType<Prisma.FavoritoMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FavoritoMaxAggregateInputType>;
export const FavoritoMaxAggregateInputObjectZodSchema = makeSchema();
