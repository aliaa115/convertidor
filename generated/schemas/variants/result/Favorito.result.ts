import * as z from "zod";
// prettier-ignore
export const FavoritoResultSchema = z
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

export type FavoritoResultType = z.infer<typeof FavoritoResultSchema>;
