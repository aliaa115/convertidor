import * as z from "zod";

export const EstadoScalarFieldEnumSchema = z.enum(["id", "nombre", "color", "icon", "createdAt", "updatedAt"]);

export type EstadoScalarFieldEnum = z.infer<typeof EstadoScalarFieldEnumSchema>;
