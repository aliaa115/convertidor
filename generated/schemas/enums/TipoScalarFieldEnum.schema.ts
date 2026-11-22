import * as z from "zod";

export const TipoScalarFieldEnumSchema = z.enum([
	"id",
	"nombre",
	"tabla",
	"estadoId",
]);

export type TipoScalarFieldEnum = z.infer<typeof TipoScalarFieldEnumSchema>;
