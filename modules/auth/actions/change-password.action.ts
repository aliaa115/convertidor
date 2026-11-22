"use server";

import bcrypt from "bcryptjs";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { changePaswordFormSchema } from "../schema/change-pasword.schema";

export type SavePasswordActionState = {
	success: boolean;
	message: string;
	fieldErrors?: Partial<Record<"password" | "confirmPassword", string[]>>;
};

export async function savePaswordAction(
	values: unknown,
): Promise<SavePasswordActionState> {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return { success: false, message: "No autorizado" };
	}

	const parsed = changePaswordFormSchema.safeParse(values);

	if (!parsed.success) {
		return {
			success: false,
			message: "Datos inválidos",
			fieldErrors: parsed.error.flatten().fieldErrors,
		};
	}

	const { password } = parsed.data;

	try {
		const hashedPassword = await bcrypt.hash(password, 10);

		await prisma.usuario.update({
			where: { id: currentUser.id },
			data: { password: hashedPassword },
		});

		return {
			success: true,
			message: "Contraseña actualizada correctamente",
		};
	} catch (error) {
		console.error("SAVE_PASSWORD_ACTION_ERROR", error);

		return {
			success: false,
			message: "Ocurrió un error al cambiar la contraseña",
		};
	}
}
