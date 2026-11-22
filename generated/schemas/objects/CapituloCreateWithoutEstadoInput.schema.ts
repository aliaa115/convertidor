import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCreateNestedOneWithoutCapitulosInputObjectSchema as LibroCreateNestedOneWithoutCapitulosInputObjectSchema } from "./LibroCreateNestedOneWithoutCapitulosInput.schema.ts";
import { NotaAutorCreateNestedManyWithoutCapituloInputObjectSchema as NotaAutorCreateNestedManyWithoutCapituloInputObjectSchema } from "./NotaAutorCreateNestedManyWithoutCapituloInput.schema.ts";
import { ParrafoCreateNestedManyWithoutCapituloInputObjectSchema as ParrafoCreateNestedManyWithoutCapituloInputObjectSchema } from "./ParrafoCreateNestedManyWithoutCapituloInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z.string().optional().nullable(),
			indice: z.number().int().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			libro: z.lazy(
				() => LibroCreateNestedOneWithoutCapitulosInputObjectSchema,
			),
			parrafos: z
				.lazy(() => ParrafoCreateNestedManyWithoutCapituloInputObjectSchema)
				.optional(),
			notasAutor: z
				.lazy(() => NotaAutorCreateNestedManyWithoutCapituloInputObjectSchema)
				.optional(),
		})
		.strict();
export const CapituloCreateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.CapituloCreateWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloCreateWithoutEstadoInput>;
export const CapituloCreateWithoutEstadoInputObjectZodSchema = makeSchema();
