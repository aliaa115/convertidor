import * as z from "zod";
export const SeguirUsuarioUpdateResultSchema = z.nullable(
	z.object({
		id: z.number().int(),
		createdAt: z.date(),
		updatedAt: z.date(),
		escritorId: z.number().int(),
		escritor: z.unknown(),
		escritorSeguidoId: z.number().int(),
		seguido: z.unknown(),
		estadoId: z.number().int(),
		estado: z.unknown(),
	}),
);
