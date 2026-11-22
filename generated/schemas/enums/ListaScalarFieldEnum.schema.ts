import * as z from "zod";

export const ListaScalarFieldEnumSchema = z.enum([
	"id",
	"nombre",
	"privada",
	"createdAt",
	"updatedAt",
	"usuarioId",
	"estadoId",
]);

export type ListaScalarFieldEnum = z.infer<typeof ListaScalarFieldEnumSchema>;
