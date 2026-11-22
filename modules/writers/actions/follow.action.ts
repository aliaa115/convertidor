"use server";

import { EntidadTipo, NotificacionTipo } from "@/generated/prisma/enums";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { createNotificationAction } from "@/modules/notifications/actions/create-notification.action";

export type FollowWriterActionState = {
	success: boolean;
	message: string;
	fieldErrors?: Partial<Record<"writerId", string[]>>;
};

export async function followWriterAction({
	writerId,
	writerUserId,
}: {
	writerId?: number;
	writerUserId?: number;
}): Promise<FollowWriterActionState> {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return { success: false, message: "No autorizado" };
	}

	const currentWriterId = currentUser.escritor?.id;

	if (!currentWriterId) {
		return {
			success: false,
			message: "El usuario actual no tiene perfil de escritor",
		};
	}

	if (!writerId) {
		return {
			success: false,
			message: "Datos inválidos",
			fieldErrors: {
				writerId: ["El escritor es requerido"],
			},
		};
	}

	if (currentWriterId === writerId) {
		return {
			success: false,
			message: "No puedes seguirte a ti mismo",
			fieldErrors: {
				writerId: ["No puedes seguirte a ti mismo"],
			},
		};
	}

	try {
		const isFollowing = await prisma.seguirUsuario.findFirst({
			where: {
				escritorId: currentWriterId,
				escritorSeguidoId: writerId,
			},
			select: {
				id: true,
			},
		});

		if (isFollowing) {
			return {
				success: false,
				message: "Ya estás siguiendo este escritor",
				fieldErrors: {
					writerId: ["Ya estás siguiendo este escritor"],
				},
			};
		}

		// Crear la relación de seguimiento
		await prisma.seguirUsuario.create({
			data: {
				escritorId: currentWriterId,
				escritorSeguidoId: writerId,
			},
		});

		// Buscar al escritor seguido para saber a qué usuario mandarle la notificación
		const _followedWriter = await prisma.escritor.findUnique({
			where: {
				id: writerId,
			},
			select: {
				id: true,
				alias: true,
				usuarioId: true,
				usuario: {
					select: {
						userName: true,
					},
				},
			},
		});

		// Si el escritor seguido existe y tiene usuario vinculado, crear notificación
		if (writerUserId) {
			await createNotificationAction({
				usuarioId: writerUserId,
				titulo: "Tienes un nuevo seguidor",
				mensaje: `${
					currentUser.escritor?.alias || currentUser.userName
				} comenzó a seguirte`,
				tipo: NotificacionTipo.FOLLOW,
				entidadTipo: EntidadTipo.ESCRITOR,
				entidadId: currentWriterId,
			});
		}

		return {
			success: true,
			message: "Escritor seguido correctamente",
		};
	} catch (error) {
		console.error("FOLLOW_WRITER_ACTION_ERROR", error);

		return {
			success: false,
			message: "Ocurrió un error al seguir al escritor",
		};
	}
}

export async function unfollowWriterAction({
	writerId,
}: {
	writerId?: number;
}): Promise<FollowWriterActionState> {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return { success: false, message: "No autorizado" };
	}

	const currentWriterId = currentUser.escritor?.id;

	if (!currentWriterId) {
		return {
			success: false,
			message: "El usuario actual no tiene perfil de escritor",
		};
	}

	if (!writerId) {
		return {
			success: false,
			message: "Datos inválidos",
			fieldErrors: {
				writerId: ["El escritor es requerido"],
			},
		};
	}

	if (currentWriterId === writerId) {
		return {
			success: false,
			message: "No puedes seguirte a ti mismo",
			fieldErrors: {
				writerId: ["No puedes seguirte a ti mismo"],
			},
		};
	}

	try {
		const isFollowing = await prisma.seguirUsuario.findFirst({
			where: {
				escritorId: currentWriterId,
				escritorSeguidoId: writerId,
			},
			select: {
				id: true,
			},
		});

		if (!isFollowing) {
			return {
				success: false,
				message: "No estás siguiendo este escritor",
				fieldErrors: {
					writerId: ["No estás siguiendo este escritor"],
				},
			};
		}

		await prisma.seguirUsuario.delete({
			where: {
				id: isFollowing.id,
			},
		});

		return {
			success: true,
			message: "Se dejó de seguir al escritor",
		};
	} catch (error) {
		console.error("UNFOLLOW_WRITER_ACTION_ERROR", error);

		return {
			success: false,
			message: "Ocurrió un error al dejar de seguir al escritor",
		};
	}
}
