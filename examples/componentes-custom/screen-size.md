# ScreenSize

## Que hace

Muestra una etiqueta fija con el breakpoint actual (`XS`, `SM`, `MD`, `LG`, `XL`, `2XL`).

## Uso recomendado

Solo para desarrollo visual o depuracion responsiva.

## Ejemplo

```tsx
import ScreenSize from "@/components/custom/navigation/screen-size";

export function LayoutDebug() {
	return <ScreenSize color="bg-primary" />;
}
```

## Advertencia

No conviene dejarlo activo en produccion salvo que forme parte de una herramienta interna.
