import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			usuarioId: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
		})
		.strict();
export const ListaSumAggregateInputObjectSchema: z.ZodType<Prisma.ListaSumAggregateInputType> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaSumAggregateInputType>;
export const ListaSumAggregateInputObjectZodSchema = makeSchema();
