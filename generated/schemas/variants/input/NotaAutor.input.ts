import * as z from "zod";
// prettier-ignore
export const NotaAutorInputSchema = z
	.object({
		id: z.number().int(),
		texto: z.string().optional().nullable(),
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

export type NotaAutorInputType = z.infer<typeof NotaAutorInputSchema>;
