import * as z from "zod";
// prettier-ignore
export const IdiomaInputSchema = z
	.object({
		id: z.number().int(),
		nombre: z.string().optional().nullable(),
		siglas: z.string().optional().nullable(),
		createdAt: z.date(),
		updatedAt: z.date(),
		estadoId: z.number().int(),
		estado: z.unknown(),
		libros: z.array(z.unknown()),
	})
	.strict();

export type IdiomaInputType = z.infer<typeof IdiomaInputSchema>;
