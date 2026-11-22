import * as z from "zod";
// prettier-ignore
export const AvatarInputSchema = z
	.object({
		id: z.number().int(),
		nombre: z.string(),
		url: z.string(),
		escritores: z.array(z.unknown()),
	})
	.strict();

export type AvatarInputType = z.infer<typeof AvatarInputSchema>;
