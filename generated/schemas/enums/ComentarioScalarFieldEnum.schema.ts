import * as z from "zod";

export const ComentarioScalarFieldEnumSchema = z.enum(["id", "contenido", "createdAt", "updatedAt", "escritorId", "parrafoId", "comentarioPadreId", "tipoId", "estadoId"]);

export type ComentarioScalarFieldEnum = z.infer<typeof ComentarioScalarFieldEnumSchema>;
