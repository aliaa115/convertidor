import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			usuarioId: z.literal(true).optional(),
			entidadId: z.literal(true).optional(),
		})
		.strict();
export const NotificacionAvgAggregateInputObjectSchema: z.ZodType<Prisma.NotificacionAvgAggregateInputType> =
	makeSchema() as unknown as z.ZodType<Prisma.NotificacionAvgAggregateInputType>;
export const NotificacionAvgAggregateInputObjectZodSchema = makeSchema();
