"use server";

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function getMyNotificationsAction() {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return {
			success: false,
			message: "No autorizado",
			data: [],
		};
	}

	try {
		const notifications = await prisma.notificacion.findMany({
			where: {
				usuarioId: currentUser.id,
			},
			orderBy: {
				createdAt: "desc",
			},
			take: 30,
		});

		return {
			success: true,
			message: "Notificaciones obtenidas correctamente",
			data: notifications,
		};
	} catch (error) {
		console.error("GET_MY_NOTIFICATIONS_ACTION_ERROR", error);

		return {
			success: false,
			message: "Ocurrió un error al obtener las notificaciones",
			data: [],
		};
	}
}
