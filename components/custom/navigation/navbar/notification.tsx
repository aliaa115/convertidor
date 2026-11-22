"use client";

import {
	BadgeCheckIcon,
	BadgeIcon,
	BellIcon,
	BookA,
	Bubbles,
	Circle,
	CircleAlert,
	ListCheck,
	ListChevronsDownUp,
	PersonStanding,
	Settings,
	SquareArrowOutUpRight,
	User2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React, { MouseEvent } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EntidadTipo, Notificacion } from "@/generated/prisma/browser";
import { cn } from "@/lib/utils";
import {
	getNotificationUrl,
	ICON_BY_ENTIDAD_TIPO,
} from "@/modules/notifications/utils";
import { DynamicIcon } from "../../DynamicIcon";

const Notification = () => {
	const router = useRouter();
	const timerRef = React.useRef<NodeJS.Timeout | null>(null);
	const hoveredIdRef = React.useRef<number | null>(null);

	const [items, setItems] = React.useState<Notificacion[]>([]);
	const [unreadCount, setUnreadCount] = React.useState([].length);

	const loadNotifications = React.useCallback(async () => {
		const res = await fetch("/api/notifications?max=15&read=false", {
			method: "GET",
			cache: "no-store",
		});

		if (!res.ok) return;

		const result = await res.json();

		if (result.success) {
			setItems(result.data);
			setUnreadCount(result.unreadCount ?? 0);
		}
	}, []);

	React.useEffect(() => {
		loadNotifications();

		const interval = setInterval(() => {
			loadNotifications();
		}, 20000);

		return () => clearInterval(interval);
	}, [loadNotifications]);

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
		setUnreadCount((l) => l - 1);

		return true;
	}

	const setReadNotification = (event: MouseEvent<HTMLDivElement>) => {
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

	const goToNotifications = () => {
		router.push("/notifications");
		router.refresh();
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon" className="rounded-full relative">
					<BellIcon />

					{unreadCount > 0 && (
						<Badge
							className="absolute -top-2 -right-2 h-5 w-5 justify-center rounded-full p-0 "
							variant="secondary"
						>
							{unreadCount}
						</Badge>
						// <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-destructive text-destructive-foreground text-xs flex items-center justify-center">
						//   {unreadCount}
						// </span>
					)}
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="end" className="w-80">
				<DropdownMenuGroup>
					{items.length === 0 ? (
						<DropdownMenuItem disabled>
							No tienes notificaciones pendientes
						</DropdownMenuItem>
					) : (
						items.map((i) => (
							<DropdownMenuItem
								key={i.id}
								id={`not_${i.id}`}
								onMouseEnter={setReadNotification}
								onMouseLeave={handleMouseLeave}
								onClick={() => handleClickNotification(i)}
								className={cn(
									"flex gap-2 my-1 items-center",
									!i.leida && "bg-muted",
								)}
							>
								{!i.leida && <CircleAlert className="text-gray-500/50" />}

								<DynamicIcon
									name={ICON_BY_ENTIDAD_TIPO[i.entidadTipo]}
									className="w-5 h-5 text-gray-500/50"
								/>

								<div className="flex flex-col min-w-0">
									<span className="font-medium">{i.titulo}</span>
									{i.mensaje && (
										<span className="text-sm text-muted-foreground wrap-break-word">
											{i.mensaje}
										</span>
									)}
								</div>
							</DropdownMenuItem>
						))
					)}
					<DropdownMenuItem onClick={() => goToNotifications()}>
						<SquareArrowOutUpRight />
						<div className="flex flex-col min-w-0">
							<span className="font-medium">Notificaciones</span>
							<span className="text-sm text-muted-foreground wrap-break-word">
								Ver todas las notificaciones
							</span>
						</div>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default Notification;
