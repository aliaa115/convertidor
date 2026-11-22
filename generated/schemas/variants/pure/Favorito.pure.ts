import * as z from "zod";
// prettier-ignore
export const FavoritoModelSchema = z
	.object({
		id: z.number().int(),
		createdAt: z.date(),
		updatedAt: z.date(),
		escritorId: z.number().int().nullable(),
		escritor: z.unknown().nullable(),
		libroId: z.number().int().nullable(),
		libro: z.unknown().nullable(),
		estadoId: z.number().int(),
		estado: z.unknown(),
	})
	.strict();

export type FavoritoPureType = z.infer<typeof FavoritoModelSchema>;
