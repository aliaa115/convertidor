import * as z from "zod";
export const AvatarFindUniqueResultSchema = z.nullable(
	z.object({
		id: z.number().int(),
		nombre: z.string(),
		url: z.string(),
		escritores: z.array(z.unknown()),
	}),
);
