import * as z from "zod";
import { EntidadTipoSchema } from "../../enums/EntidadTipo.schema.ts";
import { NotificacionTipoSchema } from "../../enums/NotificacionTipo.schema.ts";
// prettier-ignore
export const NotificacionResultSchema = z
	.object({
		id: z.number().int(),
		titulo: z.string(),
		mensaje: z.string().nullable(),
		tipo: NotificacionTipoSchema,
		leida: z.boolean(),
		usuarioId: z.number().int(),
		usuario: z.unknown(),
		entidadId: z.number().int().nullable(),
		entidadTipo: EntidadTipoSchema,
		createdAt: z.date(),
		updatedAt: z.date(),
	})
	.strict();

export type NotificacionResultType = z.infer<typeof NotificacionResultSchema>;
