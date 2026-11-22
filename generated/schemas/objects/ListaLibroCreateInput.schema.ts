import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateNestedOneWithoutListaLibrosInputObjectSchema as EstadoCreateNestedOneWithoutListaLibrosInputObjectSchema } from "./EstadoCreateNestedOneWithoutListaLibrosInput.schema.ts";
import { LibroCreateNestedOneWithoutListaLibrosInputObjectSchema as LibroCreateNestedOneWithoutListaLibrosInputObjectSchema } from "./LibroCreateNestedOneWithoutListaLibrosInput.schema.ts";
import { ListaCreateNestedOneWithoutLibrosInputObjectSchema as ListaCreateNestedOneWithoutLibrosInputObjectSchema } from "./ListaCreateNestedOneWithoutLibrosInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			createdAt: z.coerce.date().optional(),
			lista: z
				.lazy(() => ListaCreateNestedOneWithoutLibrosInputObjectSchema)
				.optional(),
			libro: z
				.lazy(() => LibroCreateNestedOneWithoutListaLibrosInputObjectSchema)
				.optional(),
			estado: z.lazy(
				() => EstadoCreateNestedOneWithoutListaLibrosInputObjectSchema,
			),
		})
		.strict();
export const ListaLibroCreateInputObjectSchema: z.ZodType<Prisma.ListaLibroCreateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaLibroCreateInput>;
export const ListaLibroCreateInputObjectZodSchema = makeSchema();
