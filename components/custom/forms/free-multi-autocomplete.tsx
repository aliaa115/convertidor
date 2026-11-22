"use client";

import { X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

type Item = {
	id?: number;
	nombre: string;
};

type Props = {
	label: string;
	name: string;
	placeholder?: string;
	searchUrl: string;
};

function normalizeValue(value: string) {
	return value.trim().replace(/\s+/g, " ");
}

function compareLoose(a: string, b: string) {
	return normalizeValue(a).toLowerCase() === normalizeValue(b).toLowerCase();
}

export default function FreeMultiAutocomplete({ label, name, placeholder, searchUrl }: Props) {
	const [query, setQuery] = useState("");
	const [selected, setSelected] = useState<Item[]>([]);
	const [suggestions, setSuggestions] = useState<Item[]>([]);
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);

	const containerRef = useRef<HTMLDivElement>(null);

	const filteredSuggestions = useMemo(() => {
		return suggestions.filter((item) => !selected.some((selectedItem) => compareLoose(selectedItem.nombre, item.nombre)));
	}, [selected, suggestions]);

	function addItem(item: Item) {
		const normalized = normalizeValue(item.nombre);
		if (!normalized) return;

		const exists = selected.some((selectedItem) => compareLoose(selectedItem.nombre, normalized));

		if (exists) {
			setQuery("");
			setOpen(false);
			return;
		}

		setSelected((prev) => [...prev, { ...item, nombre: normalized }]);
		setQuery("");
		setOpen(false);
	}

	function addCustomItem() {
		const normalized = normalizeValue(query);
		if (!normalized) return;
		addItem({ nombre: normalized });
	}

	function removeItem(nombre: string) {
		setSelected((prev) => prev.filter((item) => !compareLoose(item.nombre, nombre)));
	}

	useEffect(() => {
		const trimmed = query.trim();

		if (trimmed.length < 1) {
			setSuggestions([]);
			return;
		}

		const controller = new AbortController();
		const timeout = setTimeout(async () => {
			try {
				setLoading(true);

				const response = await fetch(`${searchUrl}?q=${encodeURIComponent(trimmed)}`, {
					signal: controller.signal,
				});

				if (!response.ok) {
					setSuggestions([]);
					return;
				}

				const data = (await response.json()) as Item[];
				setSuggestions(data);
			} catch {
				setSuggestions([]);
			} finally {
				setLoading(false);
			}
		}, 250);

		return () => {
			clearTimeout(timeout);
			controller.abort();
		};
	}, [query, searchUrl]);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (!containerRef.current) return;

			if (!containerRef.current.contains(event.target as Node)) {
				setOpen(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div
			className="space-y-2"
			ref={containerRef}>
			<label className="block text-sm font-medium">{label}</label>

			<div className="rounded-lg border bg-background p-2">
				{selected.length > 0 && (
					<div className="mb-2 flex flex-wrap gap-2">
						{selected.map((item) => (
							<span
								key={`${name}-${item.nombre}`}
								className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
								{item.nombre}
								<button
									type="button"
									onClick={() => removeItem(item.nombre)}
									className="rounded-full hover:bg-muted"
									aria-label={`Eliminar ${item.nombre}`}>
									<X className="size-4" />
								</button>

								<input
									type="hidden"
									name={name}
									value={item.nombre}
								/>
							</span>
						))}
					</div>
				)}

				<input
					type="text"
					value={query}
					placeholder={placeholder}
					className="h-10 w-full bg-transparent px-2 outline-none"
					onFocus={() => setOpen(true)}
					onChange={(e) => {
						setQuery(e.target.value);
						setOpen(true);
					}}
					onKeyDown={(e) => {
						if (e.key === "Enter" || e.key === ",") {
							e.preventDefault();
							addCustomItem();
						}

						if (e.key === "Backspace" && !query.trim() && selected.length > 0) {
							const last = selected[selected.length - 1];
							removeItem(last.nombre);
						}
					}}
				/>
			</div>

			{open && (query.trim() || filteredSuggestions.length > 0) && (
				<div className="rounded-lg border bg-background shadow-md">
					{loading ? (
						<div className="px-3 py-2 text-sm text-muted-foreground">Buscando...</div>
					) : (
						<>
							{filteredSuggestions.length > 0 && (
								<div className="max-h-56 overflow-auto py-1">
									{filteredSuggestions.map((item) => (
										<button
											key={`${item.id ?? item.nombre}-${item.nombre}`}
											type="button"
											className="block w-full px-3 py-2 text-left text-sm hover:bg-muted"
											onClick={() => addItem(item)}>
											{item.nombre}
										</button>
									))}
								</div>
							)}

							{query.trim() && !filteredSuggestions.some((item) => compareLoose(item.nombre, query)) && !selected.some((item) => compareLoose(item.nombre, query)) && (
								<button
									type="button"
									className="block w-full border-t px-3 py-2 text-left text-sm hover:bg-muted"
									onClick={addCustomItem}>
									Crear: <span className="font-medium">{query.trim()}</span>
								</button>
							)}
						</>
					)}
				</div>
			)}
		</div>
	);
}
