import * as z from "zod";
// prettier-ignore
export const ListaResultSchema = z
	.object({
		id: z.number().int(),
		nombre: z.string().nullable(),
		privada: z.boolean(),
		createdAt: z.date(),
		updatedAt: z.date(),
		usuarioId: z.number().int().nullable(),
		usuario: z.unknown().nullable(),
		estadoId: z.number().int(),
		estado: z.unknown(),
		libros: z.array(z.unknown()),
	})
	.strict();

export type ListaResultType = z.infer<typeof ListaResultSchema>;
