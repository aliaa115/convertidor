import * as z from "zod";

export const LibroEtiquetaScalarFieldEnumSchema = z.enum([
	"libroId",
	"etiquetaId",
	"createdAt",
	"updatedAt",
	"estadoId",
]);

export type LibroEtiquetaScalarFieldEnum = z.infer<
	typeof LibroEtiquetaScalarFieldEnumSchema
>;
