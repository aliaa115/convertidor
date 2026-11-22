import * as z from "zod";
// prettier-ignore
export const ConfiguracionModelSchema = z
	.object({
		id: z.number().int(),
		valor: z.string().nullable(),
		createdAt: z.date(),
		updatedAt: z.date(),
		usuarioId: z.number().int().nullable(),
		usuario: z.unknown().nullable(),
		tipoId: z.number().int().nullable(),
		tipo: z.unknown().nullable(),
		estadoId: z.number().int(),
		estado: z.unknown(),
	})
	.strict();

export type ConfiguracionPureType = z.infer<typeof ConfiguracionModelSchema>;
