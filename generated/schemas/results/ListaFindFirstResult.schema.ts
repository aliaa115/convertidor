import * as z from "zod";
export const ListaFindFirstResultSchema = z.nullable(
	z.object({
		id: z.number().int(),
		nombre: z.string().optional(),
		privada: z.boolean(),
		createdAt: z.date(),
		updatedAt: z.date(),
		usuarioId: z.number().int().optional(),
		usuario: z.unknown().optional(),
		estadoId: z.number().int(),
		estado: z.unknown(),
		libros: z.array(z.unknown()),
	}),
);
