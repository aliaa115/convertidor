import * as z from "zod";
// prettier-ignore
export const CapituloResultSchema = z
	.object({
		id: z.number().int(),
		nombre: z.string().nullable(),
		indice: z.number().int().nullable(),
		createdAt: z.date(),
		updatedAt: z.date(),
		libroId: z.number().int(),
		libro: z.unknown(),
		estadoId: z.number().int(),
		estado: z.unknown(),
		parrafos: z.array(z.unknown()),
		notasAutor: z.array(z.unknown()),
	})
	.strict();

export type CapituloResultType = z.infer<typeof CapituloResultSchema>;
