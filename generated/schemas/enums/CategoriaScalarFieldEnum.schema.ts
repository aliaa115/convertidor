import * as z from "zod";

export const CategoriaScalarFieldEnumSchema = z.enum([
	"id",
	"nombre",
	"createdAt",
	"updatedAt",
	"estadoId",
]);

export type CategoriaScalarFieldEnum = z.infer<
	typeof CategoriaScalarFieldEnumSchema
>;
