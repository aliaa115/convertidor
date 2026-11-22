import * as z from "zod";
// prettier-ignore
export const UsuarioInputSchema = z
	.object({
		id: z.number().int(),
		userName: z.string(),
		email: z.string(),
		password: z.string(),
		nivel: z.number().int(),
		createdAt: z.coerce.date(),
		updatedAt: z.coerce.date(),
		estadoId: z.number().int(),
		estado: z.unknown(),
		configuracion: z.unknown().optional().nullable(),
		escritor: z.unknown().optional().nullable(),
		listas: z.array(z.unknown()),
		notificacions: z.array(z.unknown()),
	})
	.strict();

export type UsuarioInputType = z.infer<typeof UsuarioInputSchema>;
