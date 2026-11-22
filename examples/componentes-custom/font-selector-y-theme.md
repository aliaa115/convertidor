# Font Selector y Cambio de Tema

## `FontSelector`

### Que hace

Permite cambiar la fuente visual de la app entre el valor por defecto y `OpenDyslexic`.

### Como funciona

- guarda la preferencia en `localStorage`
- actualiza `data-font` en `document.documentElement`
- reutiliza `Autocomplete`

### Ejemplo de uso

```tsx
import { FontSelector } from "@/components/custom/font-selector";

export function ToolbarAccesibilidad() {
	return <FontSelector />;
}
```

## `ChageTheme`

### Que hace

Alterna entre tema claro y oscuro usando `next-themes`.

### Requisito

Debe existir `Providers` montando `NextThemesProvider` en un layout superior.

### Ejemplo de uso

```tsx
import ChageTheme from "@/components/custom/navigation/change-theme";

export function HeaderActions() {
	return <ChageTheme />;
}
```

## Nota

El nombre exportado actual es `ChageTheme`. Si se busca consistencia, en el futuro podria renombrarse a `ChangeTheme`.
