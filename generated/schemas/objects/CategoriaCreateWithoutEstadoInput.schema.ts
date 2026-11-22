import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCategoriaCreateNestedManyWithoutCategoriaInputObjectSchema as LibroCategoriaCreateNestedManyWithoutCategoriaInputObjectSchema } from "./LibroCategoriaCreateNestedManyWithoutCategoriaInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			libros: z
				.lazy(
					() => LibroCategoriaCreateNestedManyWithoutCategoriaInputObjectSchema,
				)
				.optional(),
		})
		.strict();
export const CategoriaCreateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.CategoriaCreateWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CategoriaCreateWithoutEstadoInput>;
export const CategoriaCreateWithoutEstadoInputObjectZodSchema = makeSchema();
