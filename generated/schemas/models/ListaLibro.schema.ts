import * as z from "zod";

export const ListaLibroSchema = z.object({
	id: z.number().int(),
	createdAt: z.date(),
	updatedAt: z.date(),
	listaId: z.number().int().nullish(),
	libroId: z.number().int().nullish(),
	estadoId: z.number().int().default(1),
});

export type ListaLibroType = z.infer<typeof ListaLibroSchema>;
