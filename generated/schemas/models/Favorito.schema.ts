import * as z from "zod";

export const FavoritoSchema = z.object({
	id: z.number().int(),
	createdAt: z.date(),
	updatedAt: z.date(),
	escritorId: z.number().int().nullish(),
	libroId: z.number().int().nullish(),
	estadoId: z.number().int().default(1),
});

export type FavoritoType = z.infer<typeof FavoritoSchema>;
