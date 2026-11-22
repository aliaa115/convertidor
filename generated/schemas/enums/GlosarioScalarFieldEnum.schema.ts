import * as z from "zod";

export const GlosarioScalarFieldEnumSchema = z.enum(["id", "palabra", "significado", "createdAt", "updatedAt", "libroId", "escritorId", "estadoId"]);

export type GlosarioScalarFieldEnum = z.infer<typeof GlosarioScalarFieldEnumSchema>;
