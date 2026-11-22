"use server";

import { EntidadTipo, NotificacionTipo } from "@/generated/prisma/enums";
import { prisma } from "@/lib/prisma";

export type CreateNotificationInput = {
	usuarioId: number;
	titulo: string;
	mensaje?: string | null;
	tipo?: NotificacionTipo;
	entidadTipo: EntidadTipo;
	entidadId?: number | null;
};

export async function createNotificationAction({ usuarioId, titulo, mensaje = null, tipo = NotificacionTipo.SYSTEM, entidadTipo = EntidadTipo.SYSTEM, entidadId = null }: CreateNotificationInput) {
	try {
		const notification = await prisma.notificacion.create({
			data: {
				usuarioId,
				titulo,
				mensaje,
				tipo,
				entidadTipo,
				entidadId,
			},
		});

		return {
			success: true,
			message: "Notificación creada correctamente",
			data: notification,
		};
	} catch (error) {
		console.error("CREATE_NOTIFICATION_ACTION_ERROR", error);

		return {
			success: false,
			message: "Ocurrió un error al crear la notificación",
		};
	}
}
