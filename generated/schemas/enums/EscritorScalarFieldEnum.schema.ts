import * as z from "zod";

export const EscritorScalarFieldEnumSchema = z.enum(["id", "nombres", "apellidos", "alias", "descripcion", "fechaNacimiento", "createdAt", "updatedAt", "usuarioId", "avatarId", "estadoId"]);

export type EscritorScalarFieldEnum = z.infer<typeof EscritorScalarFieldEnumSchema>;
