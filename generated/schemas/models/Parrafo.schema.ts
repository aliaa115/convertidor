import * as z from "zod";

export const ParrafoSchema = z.object({
	id: z.number().int(),
	contenido: z.string().nullish(),
	indice: z.number().int().nullish(),
	createdAt: z.date(),
	updatedAt: z.date(),
	capituloId: z.number().int(),
	estadoId: z.number().int().default(1),
});

export type ParrafoType = z.infer<typeof ParrafoSchema>;
