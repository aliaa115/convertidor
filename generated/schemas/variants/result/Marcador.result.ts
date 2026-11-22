import * as z from "zod";
// prettier-ignore
export const MarcadorResultSchema = z
	.object({
		id: z.number().int(),
		nombre: z.string().nullable(),
		color: z.string().nullable(),
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

export type MarcadorResultType = z.infer<typeof MarcadorResultSchema>;
