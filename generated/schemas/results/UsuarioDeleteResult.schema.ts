import * as z from "zod";
export const UsuarioDeleteResultSchema = z.nullable(
	z.object({
		id: z.number().int(),
		userName: z.string(),
		email: z.string(),
		password: z.string(),
		nivel: z.number().int(),
		createdAt: z.date(),
		updatedAt: z.date(),
		estadoId: z.number().int(),
		estado: z.unknown(),
		configuracion: z.unknown().optional(),
		escritor: z.unknown().optional(),
		listas: z.array(z.unknown()),
		notificacions: z.array(z.unknown()),
	}),
);
