import Logo from "@/components/custom/logo/logo";
import LogoAnimated from "@/components/custom/logo/logo-animated";
import LogoTextAnimated from "@/components/custom/logo/logo-text-animated";

export function BrandShowcaseExample() {
	return (
		<div className="grid gap-6 rounded-xl border bg-card p-6 md:grid-cols-3">
			<div className="space-y-4">
				<h3 className="text-base font-semibold">Logo estatico</h3>
				<Logo className="h-20 w-auto text-foreground" />
			</div>

			<div className="space-y-4">
				<h3 className="text-base font-semibold">Logo animado</h3>
				<LogoAnimated
					size={180}
					waves={5}
					duration={2.4}
				/>
			</div>

			<div className="space-y-4">
				<h3 className="text-base font-semibold">Logo error animado</h3>
				<LogoTextAnimated
					size={180}
					tipo={401}
					texto="Error 401"
					waves={5}
					duration={8}
					waveColorClass="text-accent"
					errorFill="fill-accent"
					errorTextFill="fill-accent"
				/>
			</div>
		</div>
	);
}
