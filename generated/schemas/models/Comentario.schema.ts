import * as z from "zod";

export const ComentarioSchema = z.object({
	id: z.number().int(),
	contenido: z.string(),
	createdAt: z.date(),
	updatedAt: z.date(),
	escritorId: z.number().int(),
	parrafoId: z.number().int(),
	comentarioPadreId: z.number().int().nullish(),
	tipoId: z.number().int().nullish(),
	estadoId: z.number().int().default(1),
});

export type ComentarioType = z.infer<typeof ComentarioSchema>;
