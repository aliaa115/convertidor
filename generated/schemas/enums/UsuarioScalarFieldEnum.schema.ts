import * as z from "zod";

export const UsuarioScalarFieldEnumSchema = z.enum(["id", "userName", "email", "password", "nivel", "createdAt", "updatedAt", "estadoId"]);

export type UsuarioScalarFieldEnum = z.infer<typeof UsuarioScalarFieldEnumSchema>;
