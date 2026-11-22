import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CategoriaCreateNestedOneWithoutLibrosInputObjectSchema as CategoriaCreateNestedOneWithoutLibrosInputObjectSchema } from "./CategoriaCreateNestedOneWithoutLibrosInput.schema.ts";
import { LibroCreateNestedOneWithoutCategoriasInputObjectSchema as LibroCreateNestedOneWithoutCategoriasInputObjectSchema } from "./LibroCreateNestedOneWithoutCategoriasInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			libro: z.lazy(
				() => LibroCreateNestedOneWithoutCategoriasInputObjectSchema,
			),
			categoria: z.lazy(
				() => CategoriaCreateNestedOneWithoutLibrosInputObjectSchema,
			),
		})
		.strict();
export const LibroCategoriaCreateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.LibroCategoriaCreateWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaCreateWithoutEstadoInput>;
export const LibroCategoriaCreateWithoutEstadoInputObjectZodSchema =
	makeSchema();
