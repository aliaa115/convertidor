import * as z from "zod";

export const NotaAutorScalarFieldEnumSchema = z.enum(["id", "texto", "createdAt", "updatedAt", "escritorId", "capituloId", "estadoId"]);

export type NotaAutorScalarFieldEnum = z.infer<typeof NotaAutorScalarFieldEnumSchema>;
