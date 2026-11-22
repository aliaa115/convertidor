import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateNestedOneWithoutListaLibrosInputObjectSchema as EstadoCreateNestedOneWithoutListaLibrosInputObjectSchema } from "./EstadoCreateNestedOneWithoutListaLibrosInput.schema.ts";
import { ListaCreateNestedOneWithoutLibrosInputObjectSchema as ListaCreateNestedOneWithoutLibrosInputObjectSchema } from "./ListaCreateNestedOneWithoutLibrosInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			lista: z.lazy(() => ListaCreateNestedOneWithoutLibrosInputObjectSchema).optional(),
			estado: z.lazy(() => EstadoCreateNestedOneWithoutListaLibrosInputObjectSchema).optional(),
		})
		.strict();
export const ListaLibroCreateWithoutLibroInputObjectSchema: z.ZodType<Prisma.ListaLibroCreateWithoutLibroInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaLibroCreateWithoutLibroInput>;
export const ListaLibroCreateWithoutLibroInputObjectZodSchema = makeSchema();
