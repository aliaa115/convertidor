import * as z from "zod";

export const LibroScalarFieldEnumSchema = z.enum(["id", "titulo", "resumen", "portada", "publicado", "fechaPublicacion", "createdAt", "updatedAt", "escritorId", "tipoId", "estadoId", "idiomaId"]);

export type LibroScalarFieldEnum = z.infer<typeof LibroScalarFieldEnumSchema>;
