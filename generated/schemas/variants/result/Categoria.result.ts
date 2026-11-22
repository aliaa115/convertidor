import * as z from "zod";
// prettier-ignore
export const CategoriaResultSchema = z
	.object({
		id: z.number().int(),
		nombre: z.string().nullable(),
		createdAt: z.date(),
		updatedAt: z.date(),
		estadoId: z.number().int(),
		estado: z.unknown(),
		libros: z.array(z.unknown()),
	})
	.strict();

export type CategoriaResultType = z.infer<typeof CategoriaResultSchema>;
