import * as z from "zod";

export const ParrafoScalarFieldEnumSchema = z.enum([
	"id",
	"contenido",
	"indice",
	"createdAt",
	"updatedAt",
	"capituloId",
	"estadoId",
]);

export type ParrafoScalarFieldEnum = z.infer<
	typeof ParrafoScalarFieldEnumSchema
>;
