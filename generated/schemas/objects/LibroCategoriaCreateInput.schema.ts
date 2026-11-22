import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { CategoriaCreateNestedOneWithoutLibrosInputObjectSchema as CategoriaCreateNestedOneWithoutLibrosInputObjectSchema } from "./CategoriaCreateNestedOneWithoutLibrosInput.schema.ts";
import { EstadoCreateNestedOneWithoutLibroCategoriasInputObjectSchema as EstadoCreateNestedOneWithoutLibroCategoriasInputObjectSchema } from "./EstadoCreateNestedOneWithoutLibroCategoriasInput.schema.ts";
import { LibroCreateNestedOneWithoutCategoriasInputObjectSchema as LibroCreateNestedOneWithoutCategoriasInputObjectSchema } from "./LibroCreateNestedOneWithoutCategoriasInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			createdAt: z.coerce.date().optional(),
			estado: z.lazy(() => EstadoCreateNestedOneWithoutLibroCategoriasInputObjectSchema).optional(),
			libro: z.lazy(() => LibroCreateNestedOneWithoutCategoriasInputObjectSchema),
			categoria: z.lazy(() => CategoriaCreateNestedOneWithoutLibrosInputObjectSchema),
		})
		.strict();
export const LibroCategoriaCreateInputObjectSchema: z.ZodType<Prisma.LibroCategoriaCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaCreateInput>;
export const LibroCategoriaCreateInputObjectZodSchema = makeSchema();
