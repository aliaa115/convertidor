import * as z from "zod";

export const ConfiguracionScalarFieldEnumSchema = z.enum(["id", "valor", "createdAt", "updatedAt", "usuarioId", "tipoId", "estadoId"]);

export type ConfiguracionScalarFieldEnum = z.infer<typeof ConfiguracionScalarFieldEnumSchema>;
