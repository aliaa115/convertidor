import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

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
export const NotificacionMinAggregateInputObjectSchema: z.ZodType<Prisma.NotificacionMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.NotificacionMinAggregateInputType>;
export const NotificacionMinAggregateInputObjectZodSchema = makeSchema();
