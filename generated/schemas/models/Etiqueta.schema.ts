import * as z from "zod";

export const EtiquetaSchema = z.object({
	id: z.number().int(),
	nombre: z.string().nullish(),
	createdAt: z.date(),
	updatedAt: z.date(),
	estadoId: z.number().int().default(1),
});

export type EtiquetaType = z.infer<typeof EtiquetaSchema>;
