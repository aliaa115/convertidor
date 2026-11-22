import * as z from "zod";
// prettier-ignore
export const FavoritoInputSchema = z
	.object({
		id: z.number().int(),
		createdAt: z.coerce.date(),
		updatedAt: z.coerce.date(),
		escritorId: z.number().int().optional().nullable(),
		escritor: z.unknown().optional().nullable(),
		libroId: z.number().int().optional().nullable(),
		libro: z.unknown().optional().nullable(),
		estadoId: z.number().int(),
		estado: z.unknown(),
	})
	.strict();

export type FavoritoInputType = z.infer<typeof FavoritoInputSchema>;
