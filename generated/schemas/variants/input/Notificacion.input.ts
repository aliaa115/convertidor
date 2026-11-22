import * as z from "zod";
import { EntidadTipoSchema } from "../../enums/EntidadTipo.schema.ts";
import { NotificacionTipoSchema } from "../../enums/NotificacionTipo.schema.ts";
// prettier-ignore
export const NotificacionInputSchema = z
	.object({
		id: z.number().int(),
		titulo: z.string(),
		mensaje: z.string().optional().nullable(),
		tipo: NotificacionTipoSchema,
		leida: z.boolean(),
		usuarioId: z.number().int(),
		usuario: z.unknown(),
		entidadId: z.number().int().optional().nullable(),
		entidadTipo: EntidadTipoSchema,
		createdAt: z.coerce.date(),
		updatedAt: z.coerce.date(),
	})
	.strict();

export type NotificacionInputType = z.infer<typeof NotificacionInputSchema>;
