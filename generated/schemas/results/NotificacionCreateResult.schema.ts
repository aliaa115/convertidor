import * as z from "zod";
import { UsuarioSchema } from "../models/Usuario.schema.ts";
export const NotificacionCreateResultSchema = z.object({
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
});
