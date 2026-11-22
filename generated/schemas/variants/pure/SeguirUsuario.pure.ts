import * as z from "zod";
// prettier-ignore
export const SeguirUsuarioModelSchema = z
	.object({
		id: z.number().int(),
		createdAt: z.date(),
		updatedAt: z.date(),
		escritorId: z.number().int(),
		escritor: z.unknown(),
		escritorSeguidoId: z.number().int(),
		seguido: z.unknown(),
		estadoId: z.number().int(),
		estado: z.unknown(),
	})
	.strict();

export type SeguirUsuarioPureType = z.infer<typeof SeguirUsuarioModelSchema>;
