import * as z from "zod";
// prettier-ignore
export const SeguirUsuarioInputSchema = z
	.object({
		id: z.number().int(),
		createdAt: z.coerce.date(),
		updatedAt: z.coerce.date(),
		escritorId: z.number().int(),
		escritor: z.unknown(),
		escritorSeguidoId: z.number().int(),
		seguido: z.unknown(),
		estadoId: z.number().int(),
		estado: z.unknown(),
	})
	.strict();

export type SeguirUsuarioInputType = z.infer<typeof SeguirUsuarioInputSchema>;
