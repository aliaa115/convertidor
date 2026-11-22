import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCategoriaUncheckedCreateNestedManyWithoutCategoriaInputObjectSchema as LibroCategoriaUncheckedCreateNestedManyWithoutCategoriaInputObjectSchema } from "./LibroCategoriaUncheckedCreateNestedManyWithoutCategoriaInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			nombre: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			libros: z
				.lazy(
					() =>
						LibroCategoriaUncheckedCreateNestedManyWithoutCategoriaInputObjectSchema,
				)
				.optional(),
		})
		.strict();
export const CategoriaUncheckedCreateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.CategoriaUncheckedCreateWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CategoriaUncheckedCreateWithoutEstadoInput>;
export const CategoriaUncheckedCreateWithoutEstadoInputObjectZodSchema =
	makeSchema();
