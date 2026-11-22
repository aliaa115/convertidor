import * as z from "zod";

export const AvatarSchema = z.object({
	id: z.number().int(),
	nombre: z.string(),
	url: z.string(),
});

export type AvatarType = z.infer<typeof AvatarSchema>;
