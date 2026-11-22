"use client";

import { Asterisk, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { MouseEvent } from "react";
import { toast } from "sonner";
import { DynamicIcon } from "@/components/custom/DynamicIcon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EntidadTipo, Notificacion } from "@/generated/prisma/browser";
import { cn } from "@/lib/utils";
import { getNotificationUrl, ICON_BY_ENTIDAD_TIPO } from "../utils";

type NotificationFilter = EntidadTipo | "SYSTEM";
const TIPOS_ENTIDAD: NotificationFilter[] = [
	"COMENTARIO",
	"ESCRITOR",
	"LIBRO",
	"LISTA",
	"SYSTEM",
];

const NotificationsView = () => {
	const router = useRouter();
	const timerRef = React.useRef<NodeJS.Timeout | null>(null);
	const hoveredIdRef = React.useRef<number | null>(null);

	const [items, setItems] = React.useState<Notificacion[]>([]);
	const [tipoEntidadSeleccionada, setTipoEntidadSeleccionada] = React.useState<
		EntidadTipo[]
	>(["COMENTARIO", "ESCRITOR", "LIBRO", "LISTA", "SYSTEM"]);

	const loadNotifications = React.useCallback(async () => {
		const res = await fetch("/api/notifications", {
			method: "GET",
			cache: "no-store",
		});

		if (!res.ok) return;

		const result = await res.json();

		if (result.success) {
			setItems(result.data);

			if (tipoEntidadSeleccionada.length === 0) {
				setTipoEntidadSeleccionada(
					result.data
						.map((i: Notificacion) => i.entidadTipo)
						.filter(Boolean) as EntidadTipo[],
				);
			}
		}
	}, [tipoEntidadSeleccionada]);

	const itemsFiltrados = items.filter(
		(i) => i.entidadTipo && tipoEntidadSeleccionada.includes(i.entidadTipo),
	);

	const handleChangeTipoEntidad = (tipo: EntidadTipo) => {
		if (tipoEntidadSeleccionada.includes(tipo)) {
			setTipoEntidadSeleccionada(
				tipoEntidadSeleccionada.filter((i) => i !== tipo),
			);
		} else {
			setTipoEntidadSeleccionada([...tipoEntidadSeleccionada, tipo]);
		}
	};

	async function markAsRead(id: number) {
		const res = await fetch(`/api/notifications/${id}/read`, {
			method: "PATCH",
		});

		const result = await res.json();

		if (!result.success) {
			toast.error(result.message, {
				position: "top-right",
			});
			return false;
		}

		setItems((l) => l.map((i) => (i.id === id ? { ...i, leida: true } : i)));

		return true;
	}

	async function markAsReadAll() {
		const res = await fetch(`/api/notifications/read`, {
			method: "PATCH",
		});

		const result = await res.json();

		if (!result.success) {
			toast.error(result.message, {
				position: "top-right",
			});
			return false;
		}

		setItems((prev) => prev.map((i) => ({ ...i, leida: true })));

		return true;
	}

	const setReadNotification = (event: MouseEvent<HTMLButtonElement>) => {
		const id = Number(`${event.currentTarget.id}`.replace("not_", ""));

		hoveredIdRef.current = id;

		if (timerRef.current) {
			clearTimeout(timerRef.current);
		}

		timerRef.current = setTimeout(async () => {
			if (hoveredIdRef.current !== id) return;

			const notification = items.find((i) => i.id === id);

			if (!notification || notification.leida) return;

			await markAsRead(id);
		}, 1000);
	};

	const handleMouseLeave = () => {
		if (timerRef.current) {
			clearTimeout(timerRef.current);
			timerRef.current = null;
		}

		hoveredIdRef.current = null;
	};

	const handleClickNotification = async (notification: Notificacion) => {
		if (!notification.leida) {
			const ok = await markAsRead(notification.id);
			if (!ok) return;
		}

		router.push(getNotificationUrl(notification));
		router.refresh();
	};

	React.useEffect(() => {
		loadNotifications();

		const interval = setInterval(
			() => {
				loadNotifications();
			},
			1000 * 60 * 5,
		); // Refresh every 5 minutes

		return () => clearInterval(interval);
	}, [loadNotifications]);

	return (
		<div className="shadow-xl w-full justify-center 2xl:max-w-8xl lg:max-w-5xl md:max-w-4xl mb-10 p-10 bg-background/50 rounded-2xl">
			<p>Tipos de notificaciones:</p>
			<div className="grid grid-cols-7 gap-2 w-full justify-center items-center">
				{TIPOS_ENTIDAD.map((i) => (
					<Button
						key={i}
						variant={tipoEntidadSeleccionada.includes(i) ? "default" : "ghost"}
						onClick={() => handleChangeTipoEntidad(i)}
						disabled={
							items.filter((item) => item.entidadTipo === i).length === 0
						}
					>
						{i} ({items.filter((item) => item.entidadTipo === i).length})
					</Button>
				))}
				<div></div>
				<div>
					<Button onClick={markAsReadAll}>
						Marcar todas como leídas:
						<Check />
					</Button>
				</div>
			</div>
			<h1 className="text-center mt-10 text-3xl">Notificaciones:</h1>
			{itemsFiltrados.map((i, ind) => (
				<Button
					variant="ghost"
					key={i.id}
					id={`not_${i.id}`}
					onMouseEnter={setReadNotification}
					onMouseLeave={handleMouseLeave}
					onClick={() => handleClickNotification(i)}
					className={cn(
						"flex gap-2 w-full justify-start px-5 py-7 items-center",
						!i.leida && "bg-muted",
						"hover:bg-primary hover:text-primary-foreground text-wrap",
						"shadow-md",
					)}
				>
					{/* {!i.leida && <CircleAlert className="text-gray-500/50" />} */}
					<DynamicIcon
						name={ICON_BY_ENTIDAD_TIPO[i.entidadTipo]}
						className="w-5 h-5"
					/>
					<div className="flex flex-col min-w-0 relative text-left">
						{!i.leida && (
							<Badge className="absolute  -left-11 h-5 w-5 justify-center rounded-full p-0 bg-primary/50">
								<Asterisk />
							</Badge>
						)}
						<span className="font-medium text-wrap">{i.titulo}</span>
						{i.mensaje && (
							<span className="text-sm wrap-break-word">{i.mensaje}</span>
						)}
					</div>
				</Button>
			))}
			{/* <pre>{JSON.stringify(items, null, 2)}</pre> */}
		</div>
	);
};

export default NotificationsView;
