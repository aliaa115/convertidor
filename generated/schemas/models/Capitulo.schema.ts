import * as z from "zod";

export const CapituloSchema = z.object({
	id: z.number().int(),
	nombre: z.string().nullish(),
	indice: z.number().int().nullish(),
	createdAt: z.date(),
	updatedAt: z.date(),
	libroId: z.number().int(),
	estadoId: z.number().int().default(1),
});

export type CapituloType = z.infer<typeof CapituloSchema>;
