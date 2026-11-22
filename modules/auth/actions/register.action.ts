"use server";

import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { usuarioFormSchema } from "../schema/register.schema";

export type RegisterActionState = {
	success: boolean;
	message: string;
	fieldErrors?: Partial<Record<"email" | "userName" | "password" | "confirmPassword" | "nombres" | "apellidos" | "fechaNacimiento", string[]>>;
};

export async function registerAction(values: unknown): Promise<RegisterActionState> {
	const parsed = usuarioFormSchema.safeParse(values);

	if (!parsed.success) {
		return {
			success: false,
			message: "Datos inválidos",
			fieldErrors: parsed.error.flatten().fieldErrors,
		};
	}

	const { email, userName, password, nombres, apellidos, fechaNacimiento } = parsed.data;

	try {
		const existingUser = await prisma.usuario.findFirst({
			where: {
				OR: [{ email }, { userName }],
			},
			select: {
				id: true,
				email: true,
				userName: true,
			},
		});

		if (existingUser?.email === email) {
			return {
				success: false,
				message: "El correo ya está registrado",
				fieldErrors: {
					email: ["El correo ya está registrado"],
				},
			};
		}

		if (existingUser?.userName === userName) {
			return {
				success: false,
				message: "El nombre de usuario ya está en uso",
				fieldErrors: {
					userName: ["El nombre de usuario ya está en uso"],
				},
			};
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		await prisma.$transaction(async (tx) => {
			const usuario = await tx.usuario.create({
				data: {
					email,
					userName,
					password: hashedPassword,
				},
				select: {
					id: true,
				},
			});

			await tx.escritor.create({
				data: {
					nombres: nombres || null,
					apellidos: apellidos || null,
					fechaNacimiento: fechaNacimiento ?? null,
					usuarioId: usuario.id,
					alias: userName,
				},
			});
		});

		return {
			success: true,
			message: "Usuario registrado correctamente",
		};
	} catch (error) {
		console.error("REGISTER_ACTION_ERROR", error);

		return {
			success: false,
			message: "Ocurrió un error al registrar el usuario",
		};
	}
}
