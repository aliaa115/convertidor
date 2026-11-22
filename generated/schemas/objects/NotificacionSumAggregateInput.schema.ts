import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			usuarioId: z.literal(true).optional(),
			entidadId: z.literal(true).optional(),
		})
		.strict();
export const NotificacionSumAggregateInputObjectSchema: z.ZodType<Prisma.NotificacionSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.NotificacionSumAggregateInputType>;
export const NotificacionSumAggregateInputObjectZodSchema = makeSchema();
