import * as z from "zod";

export const NotificacionTipoSchema = z.enum([
	"FOLLOW",
	"COMMENT",
	"FAVORITE",
	"PUBLISH",
	"SYSTEM",
]);

export type NotificacionTipo = z.infer<typeof NotificacionTipoSchema>;
