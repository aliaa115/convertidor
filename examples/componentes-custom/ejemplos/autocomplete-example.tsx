"use client";

import { useState } from "react";
import { Autocomplete, type AutocompleteOption } from "@/components/custom/forms/autocomplete";

type Estado = "activo" | "inactivo" | "eliminado";

const options: AutocompleteOption<Estado>[] = [
	{
		value: "activo",
		label: "Activo",
		keywords: ["visible", "publicado"],
	},
	{
		value: "inactivo",
		label: "Inactivo",
		keywords: ["pausado", "oculto"],
	},
	{
		value: "eliminado",
		label: "Eliminado",
		keywords: ["borrado", "archivado"],
		disabled: true,
	},
];

export function AutocompleteExample() {
	const [value, setValue] = useState<Estado>("activo");

	return (
		<div className="w-full max-w-md space-y-3">
			<div className="space-y-1">
				<h3 className="text-base font-semibold">Selector de estado</h3>
				<p className="text-sm text-muted-foreground">Ejemplo funcional del componente `Autocomplete`.</p>
			</div>

			<Autocomplete<Estado>
				options={options}
				value={value}
				onValueChange={setValue}
				placeholder="Selecciona un estado"
				searchPlaceholder="Buscar estado..."
			/>

			<div className="rounded-lg border bg-card p-3 text-sm">
				Valor actual: <strong>{value}</strong>
			</div>
		</div>
	);
}
