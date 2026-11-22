import * as z from "zod";

export const LibroEtiquetaSchema = z.object({
	libroId: z.number().int(),
	etiquetaId: z.number().int(),
	createdAt: z.date(),
	updatedAt: z.date(),
	estadoId: z.number().int().default(1),
});

export type LibroEtiquetaType = z.infer<typeof LibroEtiquetaSchema>;
