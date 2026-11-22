import * as z from "zod";

export const CapituloScalarFieldEnumSchema = z.enum(["id", "nombre", "indice", "createdAt", "updatedAt", "libroId", "estadoId"]);

export type CapituloScalarFieldEnum = z.infer<typeof CapituloScalarFieldEnumSchema>;
