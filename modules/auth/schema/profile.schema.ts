import z from "zod";

export const profileFormSchema = z.object({
	email: z.email("Correo inválido"),
	userName: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
	alias: z.string().nullable(),
	nombres: z.string().nullish(),
	apellidos: z.string().nullish(),
	descripcion: z.string().nullish(),
	fechaNacimiento: z.preprocess((value) => {
		if (!value) return null;
		if (value instanceof Date) return value;
		return new Date(value as string);
	}, z.date().nullable()),
	avatarId: z.number().int().nullable().optional(),
});

export type ProfileInput = z.input<typeof profileFormSchema>;
