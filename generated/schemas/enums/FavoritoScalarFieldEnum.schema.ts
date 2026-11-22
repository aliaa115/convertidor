import * as z from "zod";

export const FavoritoScalarFieldEnumSchema = z.enum(["id", "createdAt", "updatedAt", "escritorId", "libroId", "estadoId"]);

export type FavoritoScalarFieldEnum = z.infer<typeof FavoritoScalarFieldEnumSchema>;
