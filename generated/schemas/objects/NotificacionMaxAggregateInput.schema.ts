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
		})
		.strict();
export const NotificacionMaxAggregateInputObjectSchema: z.ZodType<Prisma.NotificacionMaxAggregateInputType> =
	makeSchema() as unknown as z.ZodType<Prisma.NotificacionMaxAggregateInputType>;
export const NotificacionMaxAggregateInputObjectZodSchema = makeSchema();
