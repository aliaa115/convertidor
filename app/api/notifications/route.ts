import { NextRequest } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
	const user = await getCurrentUser();
	const searchParams = request.nextUrl.searchParams;
	const max = Number(searchParams.get("max") ?? "0");
	const read = searchParams.get("read") === "false" ? false : searchParams.get("read") === "true" ? true : undefined;

	console.log(searchParams);

	if (!user) {
		return Response.json({ success: false, message: "No autorizado", data: [] }, { status: 401 });
	}

	const notifications = await prisma.notificacion.findMany({
		where: { usuarioId: user.id, leida: read },
		orderBy: { createdAt: "desc" },
		take: max > 0 ? max : undefined,
	});

	const unreadCount = await prisma.notificacion.count({
		where: { usuarioId: user.id, leida: false },
	});

	return Response.json({
		success: true,
		data: notifications,
		unreadCount,
	});
}
