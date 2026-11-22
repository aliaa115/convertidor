import * as z from "zod";
export const NotaAutorFindFirstResultSchema = z.nullable(
	z.object({
		id: z.number().int(),
		texto: z.string().optional(),
		createdAt: z.date(),
		updatedAt: z.date(),
		escritorId: z.number().int(),
		escritor: z.unknown(),
		capituloId: z.number().int(),
		capitulo: z.unknown(),
		estadoId: z.number().int(),
		estado: z.unknown(),
	}),
);
