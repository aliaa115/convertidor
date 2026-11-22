# Server Actions de Auth

## Patron actual del proyecto

1. Definir schema Zod.
2. Parsear `FormData` con `parseFormData`.
3. Validar reglas de negocio.
4. Tocar base de datos con Prisma.
5. Escribir cookie o redirigir.

## Ejemplo resumido

```ts
"use server";

import { redirect } from "next/navigation";
import { parseFormData } from "@/lib/zod-formdata";
import { prisma } from "@/lib/prisma";
import { schema } from "./schema";

export async function exampleAction(_prevState: { error?: string }, formData: FormData) {
	const parsed = parseFormData(formData, schema);

	if (!parsed.success) {
		return { error: parsed.error };
	}

	await prisma.usuario.create({
		data: parsed.data,
	});

	redirect("/login");
}
```

## Recomendacion

Mantener este patron para nuevas acciones de formularios porque ya es coherente con el resto del proyecto.
