import * as z from "zod";

export const LibroSchema = z.object({
	id: z.number().int(),
	titulo: z.string(),
	resumen: z.string(),
	portada: z.string().nullish(),
	publicado: z.boolean(),
	fechaPublicacion: z.date().nullish(),
	createdAt: z.date(),
	updatedAt: z.date(),
	escritorId: z.number().int(),
	tipoId: z.number().int(),
	estadoId: z.number().int().default(1),
	idiomaId: z.number().int().default(1),
});

export type LibroType = z.infer<typeof LibroSchema>;
