import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateNestedOneWithoutListaLibrosInputObjectSchema as EstadoCreateNestedOneWithoutListaLibrosInputObjectSchema } from "./EstadoCreateNestedOneWithoutListaLibrosInput.schema.ts";
import { LibroCreateNestedOneWithoutListaLibrosInputObjectSchema as LibroCreateNestedOneWithoutListaLibrosInputObjectSchema } from "./LibroCreateNestedOneWithoutListaLibrosInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			libro: z.lazy(() => LibroCreateNestedOneWithoutListaLibrosInputObjectSchema).optional(),
			estado: z.lazy(() => EstadoCreateNestedOneWithoutListaLibrosInputObjectSchema).optional(),
		})
		.strict();
export const ListaLibroCreateWithoutListaInputObjectSchema: z.ZodType<Prisma.ListaLibroCreateWithoutListaInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaLibroCreateWithoutListaInput>;
export const ListaLibroCreateWithoutListaInputObjectZodSchema = makeSchema();
