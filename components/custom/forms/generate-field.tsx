import { Eye, EyeClosed } from "lucide-react";
import React from "react";
import {
	FieldErrors,
	FieldValues,
	Path,
	UseFormRegister,
} from "react-hook-form";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export type GenerateFieldProps<T extends FieldValues> = {
	id: Path<T>;
	label: string;
	placeholder?: string;
	type?: React.HTMLInputTypeAttribute;
	register: UseFormRegister<T>;
	errors: FieldErrors<T>;
};

export default function GenerateField<T extends FieldValues>({
	id,
	label,
	placeholder,
	type = "text",
	register,
	errors,
}: GenerateFieldProps<T>) {
	const isDateField = type === "date";
	const isPassword = type === "password";

	const [showPassword, setShowPassword] = React.useState(false);

	return (
		<Field className={cn("")}>
			<FieldLabel htmlFor={id}>{label}</FieldLabel>

			<ButtonGroup>
				{type === "textarea" ? (
					<Textarea
						id={id}
						placeholder={placeholder ?? label}
						{...register(id, isDateField ? { valueAsDate: true } : undefined)}
						aria-invalid={errors[id] ? "true" : "false"}
						className="border-background-paper"
					/>
				) : (
					<Input
						id={id}
						type={isPassword ? (showPassword ? "text" : "password") : type}
						placeholder={placeholder || (type === "date" ? undefined : label)}
						{...register(id, isDateField ? { valueAsDate: true } : undefined)}
						aria-invalid={errors[id] ? "true" : "false"}
						className="border-background-paper"
					/>
				)}

				{isPassword ? (
					<Button
						type="button"
						variant="ghost"
						onClick={() => setShowPassword((v) => !v)}
					>
						{showPassword ? <EyeClosed /> : <Eye />}
					</Button>
				) : null}
			</ButtonGroup>

			<FieldDescription className="text-destructive">
				{errors[id] ? String(errors[id]?.message ?? "") : null}
			</FieldDescription>
		</Field>
	);
}
