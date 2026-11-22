import * as z from "zod";
// prettier-ignore
export const MarcadorInputSchema = z
	.object({
		id: z.number().int(),
		nombre: z.string().optional().nullable(),
		color: z.string().optional().nullable(),
		createdAt: z.date(),
		updatedAt: z.date(),
		escritorId: z.number().int(),
		escritor: z.unknown(),
		parrafoId: z.number().int(),
		parrafo: z.unknown(),
		estadoId: z.number().int(),
		estado: z.unknown(),
	})
	.strict();

export type MarcadorInputType = z.infer<typeof MarcadorInputSchema>;
