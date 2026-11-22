import { z } from "zod";

export const createBookSchema = z.object({
	titulo: z
		.string()
		.trim()
		.min(3, "El título debe tener al menos 3 caracteres"),
	resumen: z
		.string()
		.trim()
		.min(10, "La descripción debe tener al menos 10 caracteres"),
	idiomaId: z.coerce.number().int().positive("Debes seleccionar un idioma"),
	tipoId: z.coerce.number().int().positive("Debes seleccionar un tipo"),
	categorias: z.array(z.string().trim().min(1)).default([]),
	etiquetas: z.array(z.string().trim().min(1)).default([]),
	intro: z.string().optional(),
});

export type CreateBookInput = z.infer<typeof createBookSchema>;
