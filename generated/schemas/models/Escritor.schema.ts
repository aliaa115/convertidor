import * as z from "zod";

export const EscritorSchema = z.object({
	id: z.number().int(),
	nombres: z.string().nullish(),
	apellidos: z.string().nullish(),
	alias: z.string().nullish(),
	descripcion: z.string().nullish(),
	fechaNacimiento: z.date().nullish(),
	createdAt: z.date(),
	updatedAt: z.date(),
	usuarioId: z.number().int().nullish(),
	avatarId: z.number().int().default(1),
	estadoId: z.number().int().default(1),
});

export type EscritorType = z.infer<typeof EscritorSchema>;
