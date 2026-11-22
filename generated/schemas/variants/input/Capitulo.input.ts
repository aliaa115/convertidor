import * as z from "zod";
// prettier-ignore
export const CapituloInputSchema = z
	.object({
		id: z.number().int(),
		nombre: z.string().optional().nullable(),
		indice: z.number().int().optional().nullable(),
		createdAt: z.coerce.date(),
		updatedAt: z.coerce.date(),
		libroId: z.number().int(),
		libro: z.unknown(),
		estadoId: z.number().int(),
		estado: z.unknown(),
		parrafos: z.array(z.unknown()),
		notasAutor: z.array(z.unknown()),
	})
	.strict();

export type CapituloInputType = z.infer<typeof CapituloInputSchema>;
