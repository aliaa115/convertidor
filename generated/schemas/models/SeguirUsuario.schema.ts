import * as z from "zod";

export const SeguirUsuarioSchema = z.object({
	id: z.number().int(),
	createdAt: z.date(),
	updatedAt: z.date(),
	escritorId: z.number().int(),
	escritorSeguidoId: z.number().int(),
	estadoId: z.number().int().default(1),
});

export type SeguirUsuarioType = z.infer<typeof SeguirUsuarioSchema>;
