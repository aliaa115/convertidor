import * as z from "zod";
// prettier-ignore
export const ListaLibroInputSchema = z
	.object({
		id: z.number().int(),
		createdAt: z.coerce.date(),
		updatedAt: z.coerce.date(),
		listaId: z.number().int().optional().nullable(),
		lista: z.unknown().optional().nullable(),
		libroId: z.number().int().optional().nullable(),
		libro: z.unknown().optional().nullable(),
		estadoId: z.number().int(),
		estado: z.unknown(),
	})
	.strict();

export type ListaLibroInputType = z.infer<typeof ListaLibroInputSchema>;
