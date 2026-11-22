import * as z from "zod";
export const NotificacionDeleteResultSchema = z.nullable(
	z.object({
		id: z.number().int(),
		titulo: z.string(),
		mensaje: z.string().optional(),
		tipo: z.unknown(),
		leida: z.boolean(),
		usuarioId: z.number().int(),
		usuario: z.unknown(),
		entidadId: z.number().int().optional(),
		entidadTipo: z.unknown(),
		createdAt: z.date(),
		updatedAt: z.date(),
	}),
);
