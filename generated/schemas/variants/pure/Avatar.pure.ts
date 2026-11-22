import * as z from "zod";
// prettier-ignore
export const AvatarModelSchema = z
	.object({
		id: z.number().int(),
		nombre: z.string(),
		url: z.string(),
		escritores: z.array(z.unknown()),
	})
	.strict();

export type AvatarPureType = z.infer<typeof AvatarModelSchema>;
