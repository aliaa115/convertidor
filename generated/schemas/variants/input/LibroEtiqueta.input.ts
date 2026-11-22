import * as z from "zod";
// prettier-ignore
export const LibroEtiquetaInputSchema = z
	.object({
		libroId: z.number().int(),
		etiquetaId: z.number().int(),
		createdAt: z.coerce.date(),
		updatedAt: z.coerce.date(),
		estadoId: z.number().int(),
		estado: z.unknown(),
		libro: z.unknown(),
		etiqueta: z.unknown(),
	})
	.strict();

export type LibroEtiquetaInputType = z.infer<typeof LibroEtiquetaInputSchema>;
