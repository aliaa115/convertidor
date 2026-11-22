import * as z from "zod";

export const CategoriaSchema = z.object({
	id: z.number().int(),
	nombre: z.string().nullish(),
	createdAt: z.date(),
	updatedAt: z.date(),
	estadoId: z.number().int().default(1),
});

export type CategoriaType = z.infer<typeof CategoriaSchema>;
