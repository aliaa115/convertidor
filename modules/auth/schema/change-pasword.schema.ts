import z from "zod";

export const changePaswordSchema = z.object({
	password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
	confirmPassword: z.string().min(1, "Debes confirmar la contraseña"),
});

export const changePaswordFormSchema = changePaswordSchema.refine((data) => data.password === data.confirmPassword, {
	message: "Las contraseñas no coinciden",
	path: ["confirmPassword"],
});

export type ChangePaswordInput = z.infer<typeof changePaswordFormSchema>;
