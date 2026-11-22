import * as z from "zod";

export const MarcadorSchema = z.object({
	id: z.number().int(),
	nombre: z.string().nullish(),
	color: z.string().nullish(),
	createdAt: z.date(),
	updatedAt: z.date(),
	escritorId: z.number().int(),
	parrafoId: z.number().int(),
	estadoId: z.number().int().default(1),
});

export type MarcadorType = z.infer<typeof MarcadorSchema>;
