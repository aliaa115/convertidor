import z from "zod";

export const loginFormSchema = z.object({
	identifier: z.string().min(1, "Debes ingresar tu correo o nombre de usuario"),
	password: z.string().min(1, "Debes ingresar tu contraseña"),
});

export type LoginInput = z.infer<typeof loginFormSchema>;
