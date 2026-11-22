import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function PATCH(req: Request) {
	const user = await getCurrentUser();

	if (!user) {
		return Response.json(
			{ success: false, message: "No autorizado" },
			{ status: 401 },
		);
	}

	await prisma.notificacion.updateMany({
		where: {
			usuarioId: user.id,
		},
		data: { leida: true },
	});

	return Response.json({
		success: true,
		message: "Notificación marcada como leída",
	});
}
