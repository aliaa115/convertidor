import * as z from "zod";
// prettier-ignore
export const EtiquetaInputSchema = z
	.object({
		id: z.number().int(),
		nombre: z.string().optional().nullable(),
		createdAt: z.coerce.date(),
		updatedAt: z.coerce.date(),
		estadoId: z.number().int(),
		estado: z.unknown(),
		libros: z.array(z.unknown()),
	})
	.strict();

export type EtiquetaInputType = z.infer<typeof EtiquetaInputSchema>;
