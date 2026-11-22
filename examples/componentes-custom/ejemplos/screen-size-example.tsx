import { ScreenSize } from "@/components/custom";

export function ScreenSizeExample() {
	return (
		<div className="relative min-h-40 rounded-xl border border-dashed bg-card p-4">
			<p className="max-w-md text-sm text-muted-foreground">
				Este ejemplo muestra el helper visual de breakpoint. Es util para depurar layouts responsivos durante desarrollo.
				<br />
				<br />
				Lo puede localizar en la esquina inferior derecha.
			</p>
			<ScreenSize color="bg-secondary" />
		</div>
	);
}
