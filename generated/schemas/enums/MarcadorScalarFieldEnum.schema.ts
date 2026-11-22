import * as z from "zod";

export const MarcadorScalarFieldEnumSchema = z.enum(["id", "nombre", "color", "createdAt", "updatedAt", "escritorId", "parrafoId", "estadoId"]);

export type MarcadorScalarFieldEnum = z.infer<typeof MarcadorScalarFieldEnumSchema>;
