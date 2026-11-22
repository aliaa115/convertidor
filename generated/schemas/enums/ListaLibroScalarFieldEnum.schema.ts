import * as z from "zod";

export const ListaLibroScalarFieldEnumSchema = z.enum(["id", "createdAt", "updatedAt", "listaId", "libroId", "estadoId"]);

export type ListaLibroScalarFieldEnum = z.infer<typeof ListaLibroScalarFieldEnumSchema>;
