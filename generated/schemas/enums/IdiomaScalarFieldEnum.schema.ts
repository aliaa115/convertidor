import * as z from "zod";

export const IdiomaScalarFieldEnumSchema = z.enum(["id", "nombre", "siglas", "createdAt", "updatedAt", "estadoId"]);

export type IdiomaScalarFieldEnum = z.infer<typeof IdiomaScalarFieldEnumSchema>;
