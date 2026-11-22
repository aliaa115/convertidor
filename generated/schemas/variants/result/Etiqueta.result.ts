import * as z from "zod";
// prettier-ignore
export const EtiquetaResultSchema = z
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

export type EtiquetaResultType = z.infer<typeof EtiquetaResultSchema>;
