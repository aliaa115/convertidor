import * as z from "zod";
// prettier-ignore
export const ComentarioModelSchema = z
	.object({
		id: z.number().int(),
		contenido: z.string(),
		createdAt: z.date(),
		updatedAt: z.date(),
		escritorId: z.number().int(),
		escritor: z.unknown(),
		parrafoId: z.number().int(),
		parrafo: z.unknown(),
		comentarioPadreId: z.number().int().nullable(),
		padre: z.unknown().nullable(),
		respuestas: z.array(z.unknown()),
		tipoId: z.number().int().nullable(),
		tipo: z.unknown().nullable(),
		estadoId: z.number().int(),
		estado: z.unknown(),
	})
	.strict();

export type ComentarioPureType = z.infer<typeof ComentarioModelSchema>;
