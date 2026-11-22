import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.literal(true).optional(),
			titulo: z.literal(true).optional(),
			mensaje: z.literal(true).optional(),
			tipo: z.literal(true).optional(),
			leida: z.literal(true).optional(),
			usuarioId: z.literal(true).optional(),
			entidadId: z.literal(true).optional(),
			entidadTipo: z.literal(true).optional(),
			createdAt: z.literal(true).optional(),
			updatedAt: z.literal(true).optional(),
			_all: z.literal(true).optional(),
		})
		.strict();
export const NotificacionCountAggregateInputObjectSchema: z.ZodType<Prisma.NotificacionCountAggregateInputType> =
	makeSchema() as unknown as z.ZodType<Prisma.NotificacionCountAggregateInputType>;
export const NotificacionCountAggregateInputObjectZodSchema = makeSchema();
