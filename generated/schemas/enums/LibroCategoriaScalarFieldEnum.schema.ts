import * as z from "zod";

export const LibroCategoriaScalarFieldEnumSchema = z.enum(["libroId", "categoriaId", "createdAt", "updatedAt", "estadoId"]);

export type LibroCategoriaScalarFieldEnum = z.infer<typeof LibroCategoriaScalarFieldEnumSchema>;
