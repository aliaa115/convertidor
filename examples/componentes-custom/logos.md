# Logos

## `Logo`

Representa el logo principal del proyecto como SVG React.

### Uso

```tsx
import Logo from "@/components/custom/logo/logo";

export function Brand() {
	return <Logo className="h-12 w-auto text-foreground" />;
}
```

### Cuando conviene usarlo

- encabezados
- pantallas de autenticacion
- branding dentro de cards o footers

## `LogoAnimated`

Version animada del logo con ondas circulares.

### Props utiles

- `waves`
- `duration`
- `maxRadius`
- `startRadius`
- `centerX`
- `centerY`
- `waveColor`
- `stagger`
- `size`

### Ejemplo

```tsx
import LogoAnimated from "@/components/custom/logo/logo-animated";

export function HeroBrand() {
	return (
		<LogoAnimated size={260} waves={5} duration={2.5} waveColor="#D4AF37" />
	);
}
```

## `LogoErrorAnimated`

Version animada del logo de libro para estados de error como `401` y `404`.

### Props utiles

- `tipo`
- `waves`
- `duration`
- `maxRadius`
- `startRadius`
- `centerX`
- `centerY`
- `waveColor`
- `waveColorClass`
- `errorFill`
- `stagger`
- `size`

### Ejemplo

```tsx
import LogoErrorAnimated from "@/components/custom/logo/logo-error-animated";

export function ErrorBrand() {
	return (
		<LogoErrorAnimated
			tipo={401}
			size={220}
			waves={5}
			duration={8}
			waveColorClass="text-accent"
			errorFill="fill-accent"
		/>
	);
}
```

## Observacion

Como son SVG React, todos aceptan props visuales como `className`, `width`, `height` o `style`.
