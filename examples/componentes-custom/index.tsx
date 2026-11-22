import { AccessibilityToolbarExample } from "./ejemplos/accessibility-toolbar-example";
import { AutocompleteExample } from "./ejemplos/autocomplete-example";
import { BrandShowcaseExample } from "./ejemplos/brand-showcase-example";
import { ScreenSizeExample } from "./ejemplos/screen-size-example";

export function ComponentesCustomExamplesScreen() {
	return (
		<section className="space-y-6">
			<div className="space-y-2">
				<p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
					Examples
				</p>
				<div className="space-y-1">
					<h2 className="text-2xl font-semibold">Componentes custom</h2>
					<p className="max-w-2xl text-sm text-muted-foreground">
						Pantalla general del tema con ejemplos funcionales de accesibilidad,
						branding y componentes propios del proyecto.
					</p>
				</div>
			</div>

			<div className="grid gap-6">
				<AutocompleteExample />
				<AccessibilityToolbarExample />
				<BrandShowcaseExample />
				<ScreenSizeExample />
			</div>
		</section>
	);
}

export {
	AccessibilityToolbarExample,
	AutocompleteExample,
	BrandShowcaseExample,
	ScreenSizeExample,
};

export default ComponentesCustomExamplesScreen;
