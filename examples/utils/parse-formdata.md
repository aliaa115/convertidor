# `parseFormData`

## Que hace

Convierte `FormData` en un objeto y lo valida contra un schema Zod.

## Salida

- `{ success: true, data }`
- `{ success: false, error }`

## Ejemplo

```ts
import { z } from "zod";
import { parseFormData } from "@/lib/zod-formdata";

const schema = z.object({
	title: z.string().min(1, "El titulo es obligatorio"),
});

export async function action(_prevState: unknown, formData: FormData) {
	const parsed = parseFormData(formData, schema);

	if (!parsed.success) {
		return { error: parsed.error };
	}

	return { ok: true, data: parsed.data };
}
```

## Ventaja

Reduce codigo repetido en server actions basadas en formularios HTML.
