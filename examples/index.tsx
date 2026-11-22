import { ComponentesCustomExamplesScreen } from "./componentes-custom";

export function ExamplesScreen() {
	return (
		<main className="space-y-10 max-w-7xl">
			<header className="space-y-2">
				<p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Examples</p>
				<h1 className="text-3xl font-semibold">Indice general visual</h1>
				<p className="max-w-3xl text-sm text-muted-foreground">Pantalla general que agrupa los temas documentados con ejemplos funcionales listos para renderizar dentro del proyecto.</p>
			</header>

			<ComponentesCustomExamplesScreen />
		</main>
	);
}

export { ComponentesCustomExamplesScreen } from "./componentes-custom";

export default ExamplesScreen;
