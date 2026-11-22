import z from "zod";

export const usuarioSchema = z.object({
	email: z.email("Correo inválido"),
	userName: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),

	password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
	confirmPassword: z.string().min(1, "Debes confirmar la contraseña"),
});

export const escritorSchema = z.object({
	nombres: z.string().nullish(),
	apellidos: z.string().nullish(),
	fechaNacimiento: z.date().nullish(),
	usuarioId: z.number().int(),
});

export const usuarioFormSchema = z
	.object({
		...usuarioSchema.shape, // Trae email, userName, password, confirmPassword
		...escritorSchema.omit({ usuarioId: true }).shape, // Trae nombres, apellidos, fechaNacimiento
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Las contraseñas no coinciden",
		path: ["confirmPassword"],
	});

export type RegisterInput = z.infer<typeof usuarioFormSchema>;
