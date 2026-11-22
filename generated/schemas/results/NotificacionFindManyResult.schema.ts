import * as z from "zod";
import { UsuarioSchema } from "../models/Usuario.schema.ts";
export const NotificacionFindManyResultSchema = z.object({
	data: z.array(
		z.object({
			id: z.number().int(),
			titulo: z.string(),
			mensaje: z.string().optional(),
			tipo: z.unknown(),
			leida: z.boolean(),
			usuarioId: z.number().int(),
			usuario: UsuarioSchema.optional(),
			entidadId: z.number().int().optional(),
			entidadTipo: z.unknown(),
			createdAt: z.date(),
			updatedAt: z.date(),
		}),
	),
	pagination: z.object({
		page: z.number().int().min(1),
		pageSize: z.number().int().min(1),
		total: z.number().int().min(0),
		totalPages: z.number().int().min(0),
		hasNext: z.boolean(),
		hasPrev: z.boolean(),
	}),
});
