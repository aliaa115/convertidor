import * as z from "zod";
// prettier-ignore
export const ComentarioInputSchema = z
	.object({
		id: z.number().int(),
		contenido: z.string(),
		createdAt: z.date(),
		updatedAt: z.date(),
		escritorId: z.number().int(),
		escritor: z.unknown(),
		parrafoId: z.number().int(),
		parrafo: z.unknown(),
		comentarioPadreId: z.number().int().optional().nullable(),
		padre: z.unknown().optional().nullable(),
		respuestas: z.array(z.unknown()),
		tipoId: z.number().int().optional().nullable(),
		tipo: z.unknown().optional().nullable(),
		estadoId: z.number().int(),
		estado: z.unknown(),
	})
	.strict();

export type ComentarioInputType = z.infer<typeof ComentarioInputSchema>;
