import * as z from "zod";
// prettier-ignore
export const AvatarResultSchema = z
	.object({
		id: z.number().int(),
		nombre: z.string(),
		url: z.string(),
		escritores: z.array(z.unknown()),
	})
	.strict();

export type AvatarResultType = z.infer<typeof AvatarResultSchema>;
