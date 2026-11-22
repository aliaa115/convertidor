import * as z from "zod";

export const ConfiguracionSchema = z.object({
	id: z.number().int(),
	valor: z.string().nullish(),
	createdAt: z.date(),
	updatedAt: z.date(),
	usuarioId: z.number().int().nullish(),
	tipoId: z.number().int().nullish(),
	estadoId: z.number().int().default(1),
});

export type ConfiguracionType = z.infer<typeof ConfiguracionSchema>;
