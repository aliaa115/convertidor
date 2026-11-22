"use client";

import { useEffect, useState } from "react";
import { Autocomplete, AutocompleteOption } from "../forms/autocomplete";

type FontOption =
	| "default"
	| "roboto"
	| "opendyslexic"
	| "atkinson-hyperlegible"
	| "open-sans";

type Props = {
	className?: string;
};

export function FontSelector({ className }: Props) {
	const [font, setFont] = useState<FontOption>("default");

	useEffect(() => {
		const savedFont = localStorage.getItem(
			"font-preference",
		) as FontOption | null;

		if (savedFont) {
			setFont(savedFont);
			document.documentElement.setAttribute("data-font", savedFont);
		} else {
			document.documentElement.setAttribute("data-font", "default");
		}
	}, []);

	function handleChange(value: FontOption) {
		setFont(value);
		localStorage.setItem("font-preference", value);
		document.documentElement.setAttribute("data-font", value);
	}

	const fontPreviewMap: Record<FontOption, string> = {
		default: "var(--font-inter)",
		roboto: "var(--font-roboto)",
		"open-sans": "var(--font-open-sans)",
		"atkinson-hyperlegible": "var(--font-atkinson-hyperlegible)",
		opendyslexic: "var(--font-opendyslexic)",
	};

	const renderOption = (op: AutocompleteOption<FontOption>) => (
		<span
			style={{ fontFamily: fontPreviewMap[op.value] }}
			className="overflow-hidden text-ellipsis whitespace-nowrap"
		>
			{op.label}
		</span>
	);

	const fonts: {
		value: FontOption;
		label: string;
		render?: (op: AutocompleteOption<FontOption>) => React.ReactNode;
	}[] = [
		{ value: "default", label: "Fuente normal", render: renderOption },
		{ value: "roboto", label: "Roboto", render: renderOption },
		{ value: "open-sans", label: "Open Sans", render: renderOption },
		{
			value: "atkinson-hyperlegible",
			label: "Atkinson Hyperlegible",
			render: renderOption,
		},
		{
			value: "opendyslexic",
			label: "Fuente Open Dyslexic",
			render: renderOption,
		},
	];

	return (
		<Autocomplete<FontOption>
			options={fonts}
			value={font}
			onValueChange={handleChange}
			className={className}
		/>
	);
}
