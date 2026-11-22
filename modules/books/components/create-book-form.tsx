"use client";

import Image from "next/image";
import { useActionState, useEffect, useMemo, useState } from "react";
import { Autocomplete, AutocompleteOption } from "@/components/custom/forms/autocomplete";
import FreeMultiAutocomplete from "@/components/custom/forms/free-multi-autocomplete";
import { createBookAction } from "../actions/create-book.action";

type IdiomaOption = {
	id: number;
	nombre: string | null;
};

type TipoOption = {
	id: number;
	nombre: string | null;
};

type CreateBookFormProps = {
	idiomas: IdiomaOption[];
	tipos: TipoOption[];
};

type SingleOptionValue = string;

const initialState = {
	error: "",
};

export default function CreateBookForm({ idiomas, tipos }: CreateBookFormProps) {
	const [state, formAction] = useActionState(createBookAction, initialState);
	const [preview, setPreview] = useState<string | null>(null);

	const [selectedIdiomaId, setSelectedIdiomaId] = useState<SingleOptionValue>("");
	const [selectedTipoId, setSelectedTipoId] = useState<SingleOptionValue>("");

	function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
		const file = event.target.files?.[0];

		if (!file) {
			setPreview(null);
			return;
		}

		const objectUrl = URL.createObjectURL(file);
		setPreview(objectUrl);
	}

	useEffect(() => {
		return () => {
			if (preview) URL.revokeObjectURL(preview);
		};
	}, [preview]);

	const idiomaOptions: AutocompleteOption<SingleOptionValue>[] = useMemo(
		() =>
			idiomas.map((idioma) => ({
				value: String(idioma.id),
				label: idioma.nombre ?? "Sin nombre",
			})),
		[idiomas],
	);

	const tipoOptions: AutocompleteOption<SingleOptionValue>[] = useMemo(
		() =>
			tipos.map((tipo) => ({
				value: String(tipo.id),
				label: tipo.nombre ?? "Sin nombre",
			})),
		[tipos],
	);

	return (
		<form
			action={formAction}
			className="grid grid-cols-1 gap-6 lg:grid-cols-[320px_1fr]">
			<aside className="space-y-4">
				<div className="aspect-3/4 w-full overflow-hidden rounded-xl border bg-muted">
					{preview ? (
						<Image
							src={preview}
							alt="Vista previa de portada"
							className="h-full w-full object-cover"
						/>
					) : (
						<div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">Vista previa de portada</div>
					)}
				</div>

				<div className="space-y-2">
					<label className="block text-sm font-medium">Portada</label>
					<input
						type="file"
						name="portada"
						accept="image/*"
						onChange={handleImageChange}
						className="block w-full text-sm"
					/>
				</div>
			</aside>

			<section className="space-y-6">
				<div>
					<label className="mb-2 block text-sm font-medium">Título</label>
					<input
						name="titulo"
						type="text"
						placeholder="Título del libro"
						className="h-12 w-full rounded-lg border px-4"
					/>
				</div>

				<div>
					<label className="mb-2 block text-sm font-medium">Descripción</label>
					<textarea
						name="resumen"
						placeholder="Descripción del libro"
						className="min-h-28 w-full rounded-lg border px-4 py-3"
					/>
				</div>

				<div>
					<label className="mb-2 block text-sm font-medium">Idioma</label>
					<Autocomplete<SingleOptionValue>
						options={idiomaOptions}
						value={selectedIdiomaId}
						onValueChange={setSelectedIdiomaId}
					/>
					<input
						type="hidden"
						name="idiomaId"
						value={selectedIdiomaId}
					/>
				</div>

				<div>
					<label className="mb-2 block text-sm font-medium">Tipo</label>
					<Autocomplete<SingleOptionValue>
						options={tipoOptions}
						value={selectedTipoId}
						onValueChange={setSelectedTipoId}
					/>
					<input
						type="hidden"
						name="tipoId"
						value={selectedTipoId}
					/>
				</div>

				<FreeMultiAutocomplete
					label="Categorías"
					name="categorias"
					placeholder="Escribe una categoría y presiona Enter"
					searchUrl="/api/categorias/search"
				/>

				<FreeMultiAutocomplete
					label="Etiquetas"
					name="etiquetas"
					placeholder="Escribe una etiqueta y presiona Enter"
					searchUrl="/api/etiquetas/search"
				/>

				<div>
					<label className="mb-2 block text-sm font-medium">Introducción (opcional)</label>
					<textarea
						name="intro"
						placeholder="Si no escribes introducción, se usará la descripción."
						className="min-h-40 w-full rounded-lg border px-4 py-3"
					/>
				</div>

				{state?.error ? <p className="text-sm text-red-600">{state.error}</p> : null}

				<button
					type="submit"
					className="rounded-lg bg-primary px-6 py-3 text-primary-foreground">
					Crear libro
				</button>
			</section>
		</form>
	);
}
