import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			escritorId: z.literal(true).optional(),
			escritorSeguidoId: z.literal(true).optional(),
			estadoId: z.literal(true).optional(),
		})
		.strict();
export const SeguirUsuarioSumAggregateInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioSumAggregateInputType>;
export const SeguirUsuarioSumAggregateInputObjectZodSchema = makeSchema();
