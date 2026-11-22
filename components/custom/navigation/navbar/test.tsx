"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DebugPageShow() {
	const router = useRouter();

	useEffect(() => {
		const handlePageShow = (event: PageTransitionEvent) => {
			console.log("pageshow", {
				persisted: event.persisted,
			});

			router.refresh();
		};

		window.addEventListener("pageshow", handlePageShow);

		return () => {
			window.removeEventListener("pageshow", handlePageShow);
		};
	}, [router]);

	return null;
}
