"use server";

import bcrypt from "bcryptjs";
import { setSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { loginFormSchema } from "../schema/login.schema";

export type LoginActionState = {
	success: boolean;
	message: string;
	fieldErrors?: Partial<Record<"identifier" | "password", string[]>>;
};

export async function loginAction(values: unknown): Promise<LoginActionState> {
	const parsed = loginFormSchema.safeParse(values);

	if (!parsed.success) {
		return {
			success: false,
			message: "Datos inválidos",
			fieldErrors: parsed.error.flatten().fieldErrors,
		};
	}

	const { identifier, password } = parsed.data;

	try {
		const usuario = await prisma.usuario.findFirst({
			where: {
				OR: [{ email: identifier }, { userName: identifier }],
			},
			select: {
				id: true,
				email: true,
				userName: true,
				password: true,
			},
		});

		if (!usuario) {
			return {
				success: false,
				message: "Credenciales inválidas",
				fieldErrors: {
					identifier: ["Correo, usuario o contraseña incorrectos"],
				},
			};
		}

		const passwordMatch = await bcrypt.compare(password, usuario.password);

		if (!passwordMatch) {
			return {
				success: false,
				message: "Credenciales inválidas",
				fieldErrors: {
					password: ["Correo, usuario o contraseña incorrectos"],
				},
			};
		}

		await setSession(usuario.id);

		return {
			success: true,
			message: "Inicio de sesión correcto",
		};
	} catch (error) {
		console.error("LOGIN_ACTION_ERROR", error);

		return {
			success: false,
			message: "Ocurrió un error al iniciar sesión",
		};
	}
}
