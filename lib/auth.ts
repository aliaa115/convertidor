import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

const SESSION_COOKIE = "session_token";
const LEGACY_SESSION_COOKIE = "auth-token";
const SESSION_MAX_AGE = 60 * 60 * 24; //1 dia * 7// 7 días

const SESSION_SECRET = process.env.JWT_SECRET ?? process.env.AUTH_SECRET ?? process.env.SESSION_SECRET ?? "dev-session-secret-change-me";

type SessionPayload = {
	sub: number;
	exp: number;
};

function encodeSession(payload: SessionPayload) {
	const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
	const signature = createHmac("sha256", SESSION_SECRET).update(body).digest("base64url");

	return `${body}.${signature}`;
}

function decodeSession(token: string): SessionPayload | null {
	const [body, signature] = token.split(".");

	if (!body || !signature) return null;

	const expectedSignature = createHmac("sha256", SESSION_SECRET).update(body).digest("base64url");

	const providedBuffer = Buffer.from(signature);
	const expectedBuffer = Buffer.from(expectedSignature);

	if (providedBuffer.length !== expectedBuffer.length || !timingSafeEqual(providedBuffer, expectedBuffer)) {
		return null;
	}

	try {
		const payload = JSON.parse(Buffer.from(body, "base64url").toString("utf8")) as SessionPayload;

		if (!payload || typeof payload.sub !== "number" || !Number.isInteger(payload.sub) || typeof payload.exp !== "number" || payload.exp * 1000 <= Date.now()) {
			return null;
		}

		return payload;
	} catch {
		return null;
	}
}

export function createSessionToken(userId: number) {
	return encodeSession({
		sub: userId,
		exp: Math.floor(Date.now() / 1000) + SESSION_MAX_AGE,
	});
}

export async function setSession(userId: number) {
	const cookieStore = await cookies();
	const token = createSessionToken(userId);

	const _body = {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "lax",
		path: "/",
		maxAge: SESSION_MAX_AGE,
	};

	[SESSION_COOKIE, LEGACY_SESSION_COOKIE].forEach((cookieName) => {
		cookieStore.set(cookieName, token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "lax",
			path: "/",
			maxAge: SESSION_MAX_AGE,
		});
	});
}

export async function getSession() {
	const cookieStore = await cookies();
	const sessionToken = cookieStore.get(SESSION_COOKIE)?.value || cookieStore.get(LEGACY_SESSION_COOKIE)?.value;

	if (!sessionToken) return null;

	return decodeSession(sessionToken);
}

export async function getCurrentUser() {
	const session = await getSession();

	if (!session) return null;

	if (session.exp * 1000 <= Date.now()) return null;

	return prisma.usuario.findUnique({
		where: { id: session.sub },
		include: {
			notificacions: {
				orderBy: { createdAt: "desc" },
				take: 5,
			},
			escritor: {
				include: {
					avatar: true,
				},
			},
		},
	});
}

export async function requireUser() {
	const user = await getCurrentUser();

	if (!user) {
		redirect("/");
	}

	return user;
}

export async function clearSession() {
	const cookieStore = await cookies();
	cookieStore.delete(SESSION_COOKIE);
	cookieStore.delete(LEGACY_SESSION_COOKIE);
}

export async function logout() {
	await clearSession();
}

export const getWriter = async (id?: number | string, mostrarPublicados?: boolean) => {
	const isNumeric = !isNaN(Number(id));
	const session = await getSession();

	console.log({ id });

	return id || session
		? await prisma.escritor.findFirst({
				where: {
					...(id ? (isNumeric ? { id: Number(id) } : { usuario: { userName: id } }) : session ? { usuario: { id: session.sub } } : {}),
				},
				include: {
					usuario: {
						include: {
							// Solo muestra listas privadas
							listas: { where: { privada: false }, include: { libros: true } },

							configuracion: true,
						},
					},
					avatar: true,
					// Solo muestra libros publicados
					libros: { where: { publicado: mostrarPublicados } },
					siguiendo: { include: { escritor: { include: { usuario: true } } } },
					seguidores: { include: { escritor: { include: { usuario: true } } } },
				},
			})
		: null;
};
