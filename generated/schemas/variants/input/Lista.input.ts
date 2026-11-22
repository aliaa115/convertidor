import * as z from "zod";
// prettier-ignore
export const ListaInputSchema = z
	.object({
		id: z.number().int(),
		nombre: z.string().optional().nullable(),
		privada: z.boolean(),
		createdAt: z.coerce.date(),
		updatedAt: z.coerce.date(),
		usuarioId: z.number().int().optional().nullable(),
		usuario: z.unknown().optional().nullable(),
		estadoId: z.number().int(),
		estado: z.unknown(),
		libros: z.array(z.unknown()),
	})
	.strict();

export type ListaInputType = z.infer<typeof ListaInputSchema>;
