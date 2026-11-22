import * as z from "zod";

export const AvatarScalarFieldEnumSchema = z.enum(["id", "nombre", "url"]);

export type AvatarScalarFieldEnum = z.infer<typeof AvatarScalarFieldEnumSchema>;
