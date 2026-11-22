import * as z from "zod";

export const NotaAutorSchema = z.object({
	id: z.number().int(),
	texto: z.string().nullish(),
	createdAt: z.date(),
	updatedAt: z.date(),
	escritorId: z.number().int(),
	capituloId: z.number().int(),
	estadoId: z.number().int().default(1),
});

export type NotaAutorType = z.infer<typeof NotaAutorSchema>;
