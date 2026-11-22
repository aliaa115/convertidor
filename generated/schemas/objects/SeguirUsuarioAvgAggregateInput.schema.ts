import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			escritorId: z.literal(true).optional(),
			escritorSeguidoId: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
		})
		.strict();
export const SeguirUsuarioAvgAggregateInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioAvgAggregateInputType> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioAvgAggregateInputType>;
export const SeguirUsuarioAvgAggregateInputObjectZodSchema = makeSchema();
