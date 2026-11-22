# Formularios de Auth

## `LoginForm`

Renderiza un formulario cliente conectado a `loginAction` mediante `useActionState`.

## `RegisterForm`

Renderiza un formulario cliente conectado a `registerAction`.

## `AuthSubmitButton`

Boton reutilizable para formularios de autenticacion con soporte de estado pendiente via `useFormStatus`.

## Ejemplo de patron

```tsx
"use client";

import { useActionState } from "react";
import { AuthSubmitButton } from "@/modules/auth/components/auth-submit-button";

const initialState = { error: "" };

export function ExampleForm({
	action,
}: {
	action: (
		state: { error?: string },
		formData: FormData,
	) => Promise<{
		error?: string;
	}>;
}) {
	const [state, formAction] = useActionState(action, initialState);

	return (
		<form
			action={formAction}
			className="space-y-4">
			<input
				name="email"
				type="email"
			/>
			{state?.error ? <p>{state.error}</p> : null}
			<AuthSubmitButton
				text="Enviar"
				pendingText="Procesando..."
			/>
		</form>
	);
}
```
