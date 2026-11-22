import * as z from "zod";

export const UsuarioSchema = z.object({
	id: z.number().int(),
	userName: z.string(),
	email: z.string(),
	password: z.string(),
	nivel: z.number().int().default(1),
	createdAt: z.date(),
	updatedAt: z.date(),
	estadoId: z.number().int().default(1),
});

export type UsuarioType = z.infer<typeof UsuarioSchema>;
