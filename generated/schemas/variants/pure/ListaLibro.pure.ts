import * as z from "zod";
// prettier-ignore
export const ListaLibroModelSchema = z
	.object({
		id: z.number().int(),
		createdAt: z.date(),
		updatedAt: z.date(),
		listaId: z.number().int().nullable(),
		lista: z.unknown().nullable(),
		libroId: z.number().int().nullable(),
		libro: z.unknown().nullable(),
		estadoId: z.number().int(),
		estado: z.unknown(),
	})
	.strict();

export type ListaLibroPureType = z.infer<typeof ListaLibroModelSchema>;
