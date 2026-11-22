import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateNestedOneWithoutLibroCategoriasInputObjectSchema as EstadoCreateNestedOneWithoutLibroCategoriasInputObjectSchema } from "./EstadoCreateNestedOneWithoutLibroCategoriasInput.schema.ts";
import { LibroCreateNestedOneWithoutCategoriasInputObjectSchema as LibroCreateNestedOneWithoutCategoriasInputObjectSchema } from "./LibroCreateNestedOneWithoutCategoriasInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			estado: z.lazy(() => EstadoCreateNestedOneWithoutLibroCategoriasInputObjectSchema).optional(),
			libro: z.lazy(() => LibroCreateNestedOneWithoutCategoriasInputObjectSchema),
		})
		.strict();
export const LibroCategoriaCreateWithoutCategoriaInputObjectSchema: z.ZodType<Prisma.LibroCategoriaCreateWithoutCategoriaInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaCreateWithoutCategoriaInput>;
export const LibroCategoriaCreateWithoutCategoriaInputObjectZodSchema = makeSchema();
