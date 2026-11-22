import * as z from "zod";
// prettier-ignore
export const UsuarioResultSchema = z
	.object({
		id: z.number().int(),
		userName: z.string(),
		email: z.string(),
		password: z.string(),
		nivel: z.number().int(),
		createdAt: z.date(),
		updatedAt: z.date(),
		estadoId: z.number().int(),
		estado: z.unknown(),
		configuracion: z.unknown().nullable(),
		escritor: z.unknown().nullable(),
		listas: z.array(z.unknown()),
		notificacions: z.array(z.unknown()),
	})
	.strict();

export type UsuarioResultType = z.infer<typeof UsuarioResultSchema>;
