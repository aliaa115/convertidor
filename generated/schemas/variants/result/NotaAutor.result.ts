import * as z from "zod";
// prettier-ignore
export const NotaAutorResultSchema = z
	.object({
		id: z.number().int(),
		texto: z.string().nullable(),
		createdAt: z.date(),
		updatedAt: z.date(),
		escritorId: z.number().int(),
		escritor: z.unknown(),
		capituloId: z.number().int(),
		capitulo: z.unknown(),
		estadoId: z.number().int(),
		estado: z.unknown(),
	})
	.strict();

export type NotaAutorResultType = z.infer<typeof NotaAutorResultSchema>;
