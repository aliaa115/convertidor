"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export type FormDataAutocompleteOption<T extends string = string> = {
	value: T;
	label: string;
	render?: (option: FormDataAutocompleteOption<T>) => React.ReactNode;
	keywords?: string[];
	disabled?: boolean;
};

type FormDataAutocompleteProps<T extends string = string> = {
	options: FormDataAutocompleteOption<T>[];
	name?: string;
	defaultValue?: T;
	onValueChange?: (value: T) => void;
	placeholder?: string;
	searchPlaceholder?: string;
	emptyText?: string;
	className?: string;
};

export function FormDataAutocomplete<T extends string = string>({
	options,
	name,
	defaultValue,
	onValueChange,
	placeholder = "Selecciona una opción",
	searchPlaceholder = "Buscar...",
	emptyText = "Sin resultados",
	className,
}: FormDataAutocompleteProps<T>) {
	const [open, setOpen] = React.useState(false);
	const [selectedValue, setSelectedValue] = React.useState<T | undefined>(defaultValue);

	React.useEffect(() => {
		setSelectedValue(defaultValue);
	}, [defaultValue]);

	const selectedOption = options.find((option) => option.value === selectedValue);

	function handleSelect(currentValue: string) {
		const newValue = currentValue === selectedValue ? undefined : (currentValue as T);

		setSelectedValue(newValue);
		if (newValue) {
			onValueChange?.(newValue);
		}
		setOpen(false);
	}

	return (
		<>
			{name ? (
				<input
					type="hidden"
					name={name}
					value={selectedValue ?? ""}
				/>
			) : null}

			<Popover
				open={open}
				onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						type="button"
						variant="outline"
						role="combobox"
						aria-expanded={open}
						className={cn("w-full justify-between font-normal", !selectedOption && "text-muted-foreground", className)}>
						<span className="truncate">{selectedOption ? selectedOption.label : placeholder}</span>
						<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
					</Button>
				</PopoverTrigger>

				<PopoverContent className="w-(--radix-popover-trigger-width) p-0">
					<Command
						filter={(itemValue, search, keywords = []) => {
							const option = options.find((opt) => opt.value === itemValue);
							if (!option) return 0;

							const term = search.toLowerCase().trim();
							const haystack = [option.value, option.label, ...keywords].join(" ").toLowerCase();

							return haystack.includes(term) ? 1 : 0;
						}}>
						<CommandInput placeholder={searchPlaceholder} />
						<CommandList>
							<CommandEmpty>{emptyText}</CommandEmpty>

							<CommandGroup>
								{options.map((option) => {
									const isSelected = option.value === selectedValue;

									return (
										<CommandItem
											key={option.value}
											value={option.value}
											keywords={[option.label, ...(option.keywords ?? [])]}
											disabled={option.disabled}
											onSelect={handleSelect}>
											<Check className={cn("mr-2 h-4 w-4 shrink-0", isSelected ? "opacity-100" : "opacity-0")} />

											<div className="min-w-0 flex-1">{option.render ? option.render(option) : option.label}</div>
										</CommandItem>
									);
								})}
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
		</>
	);
}
