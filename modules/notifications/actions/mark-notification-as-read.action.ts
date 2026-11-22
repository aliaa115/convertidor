("use server");

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function markNotificationAsReadAction(id: number) {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return {
			success: false,
			message: "No autorizado",
		};
	}

	try {
		const notification = await prisma.notificacion.findFirst({
			where: {
				id,
				usuarioId: currentUser.id,
			},
			select: {
				id: true,
			},
		});

		if (!notification) {
			return {
				success: false,
				message: "La notificación no existe o no te pertenece",
			};
		}

		await prisma.notificacion.update({
			where: {
				id,
			},
			data: {
				leida: true,
			},
		});

		return {
			success: true,
			message: "Notificación marcada como leída",
		};
	} catch (error) {
		console.error("MARK_NOTIFICATION_AS_READ_ACTION_ERROR", error);

		return {
			success: false,
			message: "Ocurrió un error al actualizar la notificación",
		};
	}
}
