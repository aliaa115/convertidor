import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CategoriaCreateNestedOneWithoutLibrosInputObjectSchema as CategoriaCreateNestedOneWithoutLibrosInputObjectSchema } from "./CategoriaCreateNestedOneWithoutLibrosInput.schema.ts";
import { EstadoCreateNestedOneWithoutLibroCategoriasInputObjectSchema as EstadoCreateNestedOneWithoutLibroCategoriasInputObjectSchema } from "./EstadoCreateNestedOneWithoutLibroCategoriasInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			estado: z
				.lazy(
					() => EstadoCreateNestedOneWithoutLibroCategoriasInputObjectSchema,
				)
				.optional(),
			categoria: z.lazy(
				() => CategoriaCreateNestedOneWithoutLibrosInputObjectSchema,
			),
		})
		.strict();
export const LibroCategoriaCreateWithoutLibroInputObjectSchema: z.ZodType<Prisma.LibroCategoriaCreateWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaCreateWithoutLibroInput>;
export const LibroCategoriaCreateWithoutLibroInputObjectZodSchema =
	makeSchema();
