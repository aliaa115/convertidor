import * as z from "zod";
export const ConfiguracionDeleteResultSchema = z.nullable(
	z.object({
		id: z.number().int(),
		valor: z.string().optional(),
		createdAt: z.date(),
		updatedAt: z.date(),
		usuarioId: z.number().int().optional(),
		usuario: z.unknown().optional(),
		tipoId: z.number().int().optional(),
		tipo: z.unknown().optional(),
		estadoId: z.number().int(),
		estado: z.unknown(),
	}),
);
