"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
	{ href: "/configure/profile", label: "Perfil" },
	{ href: "/configure/password", label: "Contraseña" },
];

export default function ConfigureNav() {
	const pathname = usePathname();

	return (
		<>
			<h1 className="text-2xl font-bold">Configuración</h1>
			<p className="text-muted-foreground mb-5">
				Opciones de configuración del usuario
			</p>

			<nav className="flex flex-col gap-2">
				{links.map((link) => {
					const isActive = pathname === link.href;

					return (
						<Link
							key={link.href}
							href={link.href}
							className={cn(
								"px-3 py-2 rounded-lg transition-colors",
								"hover:bg-accent/50",
								isActive && "bg-primary text-primary-foreground",
							)}
						>
							{link.label}
						</Link>
					);
				})}
			</nav>
		</>
	);
}
