"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RefreshOnPageShow() {
	const router = useRouter();

	console.log("refreshOnPageShow");

	useEffect(() => {
		const handleNavigation = (event: unknown) => {
			// persistencia indica si la página se cargó desde el caché del navegador (BFCache)
			if (event.persisted || event.type === "popstate") {
				console.log("Navegación detectada: Forzando refresco de cookies...");
				router.refresh();
			}
		};

		window.addEventListener("popstate", handleNavigation);
		window.addEventListener("pageshow", handleNavigation);

		return () => {
			window.removeEventListener("popstate", handleNavigation);
			window.removeEventListener("pageshow", handleNavigation);
		};
	}, [router]);

	return null;
}
