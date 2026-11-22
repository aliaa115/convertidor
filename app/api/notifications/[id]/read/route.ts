import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
	const user = await getCurrentUser();

	if (!user) {
		return Response.json({ success: false, message: "No autorizado" }, { status: 401 });
	}

	const { id } = await params;
	const notificationId = Number(id);

	const notification = await prisma.notificacion.findFirst({
		where: {
			id: notificationId,
			usuarioId: user.id,
		},
		select: {
			id: true,
		},
	});

	if (!notification) {
		return Response.json(
			{
				success: false,
				message: "La notificación no existe o no te pertenece",
			},
			{ status: 404 },
		);
	}

	await prisma.notificacion.update({
		where: {
			id: notificationId,
		},
		data: {
			leida: true,
		},
	});

	return Response.json({
		success: true,
		message: "Notificación marcada como leída",
	});
}
