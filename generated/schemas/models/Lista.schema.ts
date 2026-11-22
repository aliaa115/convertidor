import * as z from "zod";

export const ListaSchema = z.object({
	id: z.number().int(),
	nombre: z.string().nullish(),
	privada: z.boolean().default(true),
	createdAt: z.date(),
	updatedAt: z.date(),
	usuarioId: z.number().int().nullish(),
	estadoId: z.number().int().default(1),
});

export type ListaType = z.infer<typeof ListaSchema>;
