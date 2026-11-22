import * as z from "zod";
// prettier-ignore
export const ConfiguracionInputSchema = z
	.object({
		id: z.number().int(),
		valor: z.string().optional().nullable(),
		createdAt: z.date(),
		updatedAt: z.date(),
		usuarioId: z.number().int().optional().nullable(),
		usuario: z.unknown().optional().nullable(),
		tipoId: z.number().int().optional().nullable(),
		tipo: z.unknown().optional().nullable(),
		estadoId: z.number().int(),
		estado: z.unknown(),
	})
	.strict();

export type ConfiguracionInputType = z.infer<typeof ConfiguracionInputSchema>;
