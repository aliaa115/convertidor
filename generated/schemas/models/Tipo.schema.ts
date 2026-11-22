import * as z from "zod";

export const TipoSchema = z.object({
	id: z.number().int(),
	nombre: z.string().nullish(),
	tabla: z.string().nullish(),
	estadoId: z.number().int().default(1),
});

export type TipoType = z.infer<typeof TipoSchema>;
