import * as z from "zod";
import { EntidadTipoSchema } from "../enums/EntidadTipo.schema.ts";
import { NotificacionTipoSchema } from "../enums/NotificacionTipo.schema.ts";

export const NotificacionSchema = z.object({
	id: z.number().int(),
	titulo: z.string(),
	mensaje: z.string().nullish(),
	tipo: NotificacionTipoSchema.default("SYSTEM"),
	leida: z.boolean(),
	usuarioId: z.number().int(),
	entidadId: z.number().int().nullish(),
	entidadTipo: EntidadTipoSchema.default("SYSTEM"),
	createdAt: z.date(),
	updatedAt: z.date(),
});

export type NotificacionType = z.infer<typeof NotificacionSchema>;
