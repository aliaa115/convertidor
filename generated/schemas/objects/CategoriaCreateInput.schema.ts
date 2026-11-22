import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateNestedOneWithoutCategoriasInputObjectSchema as EstadoCreateNestedOneWithoutCategoriasInputObjectSchema } from "./EstadoCreateNestedOneWithoutCategoriasInput.schema.ts";
import { LibroCategoriaCreateNestedManyWithoutCategoriaInputObjectSchema as LibroCategoriaCreateNestedManyWithoutCategoriaInputObjectSchema } from "./LibroCategoriaCreateNestedManyWithoutCategoriaInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			estado: z.lazy(
				() => EstadoCreateNestedOneWithoutCategoriasInputObjectSchema,
			),
			libros: z
				.lazy(
					() => LibroCategoriaCreateNestedManyWithoutCategoriaInputObjectSchema,
				)
				.optional(),
		})
		.strict();
export const CategoriaCreateInputObjectSchema: z.ZodType<Prisma.CategoriaCreateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CategoriaCreateInput>;
export const CategoriaCreateInputObjectZodSchema = makeSchema();
