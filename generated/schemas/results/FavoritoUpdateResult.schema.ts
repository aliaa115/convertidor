import * as z from "zod";
export const FavoritoUpdateResultSchema = z.nullable(
	z.object({
		id: z.number().int(),
		createdAt: z.date(),
		updatedAt: z.date(),
		escritorId: z.number().int().optional(),
		escritor: z.unknown().optional(),
		libroId: z.number().int().optional(),
		libro: z.unknown().optional(),
		estadoId: z.number().int(),
		estado: z.unknown(),
	}),
);
