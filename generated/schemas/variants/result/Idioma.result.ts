import * as z from "zod";
// prettier-ignore
export const IdiomaResultSchema = z
	.object({
		id: z.number().int(),
		nombre: z.string().nullable(),
		siglas: z.string().nullable(),
		createdAt: z.date(),
		updatedAt: z.date(),
		estadoId: z.number().int(),
		estado: z.unknown(),
		libros: z.array(z.unknown()),
	})
	.strict();

export type IdiomaResultType = z.infer<typeof IdiomaResultSchema>;
