"use server";

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function markAllNotificationsAsReadAction() {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return {
			success: false,
			message: "No autorizado",
		};
	}

	try {
		await prisma.notificacion.updateMany({
			where: {
				usuarioId: currentUser.id,
				leida: false,
			},
			data: {
				leida: true,
			},
		});

		return {
			success: true,
			message: "Todas las notificaciones fueron marcadas como leídas",
		};
	} catch (error) {
		console.error("MARK_ALL_NOTIFICATIONS_AS_READ_ACTION_ERROR", error);

		return {
			success: false,
			message: "Ocurrió un error al actualizar las notificaciones",
		};
	}
}
