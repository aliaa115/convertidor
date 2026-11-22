"use server";

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function getUnreadNotificationsCountAction() {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return {
			success: false,
			message: "No autorizado",
			data: 0,
		};
	}

	try {
		const count = await prisma.notificacion.count({
			where: {
				usuarioId: currentUser.id,
				leida: false,
			},
		});

		return {
			success: true,
			message: "Conteo obtenido correctamente",
			data: count,
		};
	} catch (error) {
		console.error("GET_UNREAD_NOTIFICATIONS_COUNT_ACTION_ERROR", error);

		return {
			success: false,
			message: "Ocurrió un error al contar las notificaciones",
			data: 0,
		};
	}
}
