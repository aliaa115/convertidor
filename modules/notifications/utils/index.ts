import { EntidadTipo, Notificacion } from "@/generated/prisma/browser";

export const getNotificationUrl = (notification: Notificacion) => {
	if (!notification.entidadTipo || !notification.entidadId) {
		return "/";
	}

	switch (notification.entidadTipo) {
		case EntidadTipo.ESCRITOR:
			return `/writers/${notification.entidadId}`;
		case EntidadTipo.LIBRO:
			return `/book/${notification.entidadId}`;
		case EntidadTipo.COMENTARIO:
			return `/comment/${notification.entidadId}`;
		case EntidadTipo.LISTA:
			return `/listas/${notification.entidadId}`;
		default:
			return "/";
	}
};

export const ICON_BY_ENTIDAD_TIPO: Record<EntidadTipo, string> = {
	[EntidadTipo.ESCRITOR]: "User2",
	[EntidadTipo.LIBRO]: "BookA",
	[EntidadTipo.COMENTARIO]: "Bubbles",
	[EntidadTipo.LISTA]: "ListCheck",
	[EntidadTipo.SYSTEM]: "Settings",
};
