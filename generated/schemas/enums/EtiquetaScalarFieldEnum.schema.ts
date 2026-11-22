import * as z from "zod";

export const EtiquetaScalarFieldEnumSchema = z.enum([
	"id",
	"nombre",
	"createdAt",
	"updatedAt",
	"estadoId",
]);

export type EtiquetaScalarFieldEnum = z.infer<
	typeof EtiquetaScalarFieldEnumSchema
>;
