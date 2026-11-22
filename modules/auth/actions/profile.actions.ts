"use server";

// Helper que devuelve el usuario autenticado actual basado en la sesión/cookie.
import { getCurrentUser } from "@/lib/auth";
// Cliente de Prisma para hacer consultas y updates a la BD.
import { prisma } from "@/lib/prisma";

// Schema de Zod para validar los datos que llegan del formulario de perfil.
import { profileFormSchema } from "../schema/profile.schema";

// Tipo de respuesta que devuelve la action.
// Sirve para que el frontend sepa si salió bien o mal,
// y en caso de error mostrar mensajes específicos por campo.
export type SaveProfileActionState = {
	success: boolean;
	message: string;
	fieldErrors?: Partial<Record<"email" | "userName" | "nombres" | "apellidos" | "alias" | "fechaNacimiento" | "avatarId", string[]>>;
};

// Server Action que guarda los cambios del perfil.
export async function saveProfileAction(values: unknown): Promise<SaveProfileActionState> {
	// 1) Obtener el usuario actual autenticado.
	// Si no hay sesión válida, no se puede guardar nada.
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return { success: false, message: "No autorizado" };
	}

	// 2) Validar lo que llegó del formulario usando Zod.
	// safeParse no lanza error, sino que devuelve success true/false.
	const parsed = profileFormSchema.safeParse(values);

	if (!parsed.success) {
		return {
			success: false,
			message: "Datos inválidos",
			// Convierte los errores de Zod a un formato más fácil de usar en el form.
			fieldErrors: parsed.error.flatten().fieldErrors,
		};
	}

	// 3) Extraer los datos ya validados.
	const { email, userName, nombres, apellidos, alias, fechaNacimiento, avatarId } = parsed.data;

	try {
		// 4) Verificar si ya existe OTRO usuario con el mismo email o userName.
		// El "id not currentUser.id" evita que el propio usuario choque consigo mismo.
		const existingUser = await prisma.usuario.findFirst({
			where: {
				AND: [{ OR: [{ email }, { userName }] }, { id: { not: currentUser.id } }],
			},
			// Solo traemos lo necesario para validar conflicto.
			select: { id: true, email: true, userName: true },
		});

		// 5) Si el email ya lo usa otro usuario, devolver error para el campo email.
		if (existingUser?.email === email) {
			return {
				success: false,
				message: "El correo ya está en uso",
				fieldErrors: {
					email: ["El correo ya está en uso"],
				},
			};
		}

		// 6) Si el userName ya lo usa otro usuario, devolver error para ese campo.
		if (existingUser?.userName === userName) {
			return {
				success: false,
				message: "El nombre de usuario ya está en uso",
				fieldErrors: {
					userName: ["El nombre de usuario ya está en uso"],
				},
			};
		}

		// 7) Si mandaron un avatarId, validar que ese avatar exista realmente.
		// Esto evita guardar IDs inventados o inválidos.
		if (avatarId !== null && avatarId !== undefined) {
			const avatarExists = await prisma.avatar.findUnique({
				where: { id: avatarId },
				select: { id: true },
			});

			if (!avatarExists) {
				return {
					success: false,
					message: "El avatar seleccionado no existe",
					fieldErrors: {
						avatarId: ["El avatar seleccionado no existe"],
					},
				};
			}
		}

		// 8) Construir el objeto con los campos que van a actualizarse en usuario.
		// Aquí solo estás actualizando email y userName.
		const updateUsuarioData: { email: string; userName: string } = {
			email,
			userName,
		};

		// 9) Usar una transacción para actualizar usuario y escritor juntos.
		// Así, si una parte falla, no se guarda la otra a medias.
		await prisma.$transaction(async (tx) => {
			// Actualiza la tabla usuario.
			await tx.usuario.update({
				where: { id: currentUser.id },
				data: updateUsuarioData,
			});

			// Si el usuario tiene registro relacionado en escritor, actualízalo también.
			if (currentUser.escritor?.id) {
				await tx.escritor.update({
					where: {
						id: currentUser.escritor.id,
					},
					data: {
						// Si vienen vacíos, los guardas como null.
						nombres: nombres || null,
						apellidos: apellidos || null,

						// Alias opcional; si no viene, se guarda null.
						alias: alias ?? null,

						// Fecha opcional; si no viene, se guarda null.
						fechaNacimiento: fechaNacimiento ?? null,

						// Avatar opcional; si no viene, se guarda null.
						avatarId: avatarId ?? null,
					},
				});
			}
		});

		// 10) Si todo salió bien, responder éxito.
		return {
			success: true,
			message: "Perfil actualizado correctamente",
		};
	} catch (error) {
		// 11) Si algo falla inesperadamente en BD o en la transacción, lo registras.
		console.error("SAVE_PROFILE_ACTION_ERROR", error);

		// Y devuelves un error genérico al frontend.
		return {
			success: false,
			message: "Ocurrió un error al guardar el perfil",
		};
	}
}
