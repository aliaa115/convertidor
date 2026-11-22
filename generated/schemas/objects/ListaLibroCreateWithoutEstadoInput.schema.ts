import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCreateNestedOneWithoutListaLibrosInputObjectSchema as LibroCreateNestedOneWithoutListaLibrosInputObjectSchema } from "./LibroCreateNestedOneWithoutListaLibrosInput.schema.ts";
import { ListaCreateNestedOneWithoutLibrosInputObjectSchema as ListaCreateNestedOneWithoutLibrosInputObjectSchema } from "./ListaCreateNestedOneWithoutLibrosInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			lista: z.lazy(() => ListaCreateNestedOneWithoutLibrosInputObjectSchema).optional(),
			libro: z.lazy(() => LibroCreateNestedOneWithoutListaLibrosInputObjectSchema).optional(),
		})
		.strict();
export const ListaLibroCreateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.ListaLibroCreateWithoutEstadoInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaLibroCreateWithoutEstadoInput>;
export const ListaLibroCreateWithoutEstadoInputObjectZodSchema = makeSchema();
