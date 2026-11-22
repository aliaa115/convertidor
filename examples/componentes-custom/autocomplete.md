# Autocomplete

## Que hace

Renderiza un combobox reutilizable usando `Popover`, `Command` y `Button`.

## Cuando usarlo

- seleccion de opciones con buscador
- listas medianas o largas
- casos donde la opcion necesita render custom

## Props principales

- `options`
- `value`
- `onValueChange`
- `placeholder`
- `searchPlaceholder`
- `emptyText`
- `className`

## Ejemplo minimo

```tsx
"use client";

import { useState } from "react";
import { Autocomplete } from "@/components/custom/autocomplete";

type Estado = "activo" | "inactivo";

export function EstadoSelector() {
	const [value, setValue] = useState<Estado>("activo");

	return (
		<Autocomplete<Estado>
			value={value}
			onValueChange={setValue}
			placeholder="Selecciona un estado"
			options={[
				{ value: "activo", label: "Activo", keywords: ["visible"] },
				{ value: "inactivo", label: "Inactivo", keywords: ["oculto"] },
			]}
		/>
	);
}
```

## Ejemplo con render custom

```tsx
const options = [
	{
		value: "opendyslexic",
		label: "Open Dyslexic",
		render: (option) => (
			<span style={{ fontFamily: option.value }}>{option.label}</span>
		),
	},
];
```

## Observaciones

- Es un componente controlado por `value`.
- Permite deseleccionar si se vuelve a elegir la opcion actual.
- El `filter` combina `value`, `label` y `keywords`.
