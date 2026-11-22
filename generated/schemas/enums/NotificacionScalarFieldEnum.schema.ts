import * as z from "zod";

export const NotificacionScalarFieldEnumSchema = z.enum([
	"id",
	"titulo",
	"mensaje",
	"tipo",
	"leida",
	"usuarioId",
	"entidadId",
	"entidadTipo",
	"createdAt",
	"updatedAt",
]);

export type NotificacionScalarFieldEnum = z.infer<
	typeof NotificacionScalarFieldEnumSchema
>;
