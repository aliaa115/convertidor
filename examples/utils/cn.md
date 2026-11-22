# `cn`

## Que hace

Combina `clsx` y `tailwind-merge` para unir clases condicionales sin duplicar utilidades incompatibles.

## Ejemplo

```tsx
import { cn } from "@/lib/utils";

const className = cn(
	"rounded-lg px-4 py-2",
	isActive && "bg-primary text-primary-foreground",
	disabled && "opacity-50",
);
```

## Cuando usarlo

- en cualquier componente con `className`
- cuando existan clases condicionales
- cuando una prop de estilo pueda sobrescribir otra
