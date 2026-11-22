import * as z from "zod";

export const EstadoSchema = z.object({
	id: z.number().int(),
	nombre: z.string(),
	color: z.string().nullish(),
	icon: z.string().nullish(),
	createdAt: z.date(),
	updatedAt: z.date(),
});

export type EstadoType = z.infer<typeof EstadoSchema>;
