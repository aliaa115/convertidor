import * as z from "zod";
// prettier-ignore
export const LibroEtiquetaResultSchema = z
	.object({
		libroId: z.number().int(),
		etiquetaId: z.number().int(),
		createdAt: z.date(),
		updatedAt: z.date(),
		estadoId: z.number().int(),
		estado: z.unknown(),
		libro: z.unknown(),
		etiqueta: z.unknown(),
	})
	.strict();

export type LibroEtiquetaResultType = z.infer<typeof LibroEtiquetaResultSchema>;
