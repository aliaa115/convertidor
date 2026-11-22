import * as z from "zod";
export const ListaLibroFindFirstResultSchema = z.nullable(
	z.object({
		id: z.number().int(),
		createdAt: z.date(),
		updatedAt: z.date(),
		listaId: z.number().int().optional(),
		lista: z.unknown().optional(),
		libroId: z.number().int().optional(),
		libro: z.unknown().optional(),
		estadoId: z.number().int(),
		estado: z.unknown(),
	}),
);
