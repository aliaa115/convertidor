"use client";

import { ChangeTheme, FontSelector } from "@/components/custom";

export function AccessibilityToolbarExample() {
	return (
		<div className="flex w-full max-w-xl flex-col gap-3 rounded-xl border bg-card p-4 sm:flex-row sm:items-center">
			<div className="flex-1 space-y-1">
				<h3 className="text-base font-semibold">Barra de accesibilidad</h3>
				<p className="text-sm text-muted-foreground">Ejemplo funcional con selector de fuente y cambio de tema.</p>
			</div>

			<div className="flex items-center gap-2">
				<div className="min-w-52">
					<FontSelector />
				</div>
				<ChangeTheme />
			</div>
		</div>
	);
}
