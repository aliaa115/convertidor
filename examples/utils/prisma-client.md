# `prisma`

## Que hace

Expone una unica instancia compartida del cliente Prisma para toda la app.

## Ejemplo en server component

```tsx
import { prisma } from "@/lib/prisma";

export default async function LibroPage() {
	const estados = await prisma.estado.findMany({
		orderBy: { id: "asc" },
	});

	return <pre>{JSON.stringify(estados, null, 2)}</pre>;
}
```

## Ejemplo en server action

```ts
import { prisma } from "@/lib/prisma";

await prisma.usuario.create({
	data: {
		userName,
		email,
		password: hashedPassword,
		nivel: 1,
	},
});
```

## Nota

No debe importarse en componentes cliente.
