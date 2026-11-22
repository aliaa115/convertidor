import * as z from "zod";

export const SeguirUsuarioScalarFieldEnumSchema = z.enum(["id", "createdAt", "updatedAt", "escritorId", "escritorSeguidoId", "estadoId"]);

export type SeguirUsuarioScalarFieldEnum = z.infer<typeof SeguirUsuarioScalarFieldEnumSchema>;
