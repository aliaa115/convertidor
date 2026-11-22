import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateNestedOneWithoutCapitulosInputObjectSchema as EstadoCreateNestedOneWithoutCapitulosInputObjectSchema } from "./EstadoCreateNestedOneWithoutCapitulosInput.schema.ts";
import { NotaAutorCreateNestedManyWithoutCapituloInputObjectSchema as NotaAutorCreateNestedManyWithoutCapituloInputObjectSchema } from "./NotaAutorCreateNestedManyWithoutCapituloInput.schema.ts";
import { ParrafoCreateNestedManyWithoutCapituloInputObjectSchema as ParrafoCreateNestedManyWithoutCapituloInputObjectSchema } from "./ParrafoCreateNestedManyWithoutCapituloInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z.string().optional().nullable(),
			indice: z.number().int().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			estado: z
				.lazy(() => EstadoCreateNestedOneWithoutCapitulosInputObjectSchema)
				.optional(),
			parrafos: z
				.lazy(() => ParrafoCreateNestedManyWithoutCapituloInputObjectSchema)
				.optional(),
			notasAutor: z
				.lazy(() => NotaAutorCreateNestedManyWithoutCapituloInputObjectSchema)
				.optional(),
		})
		.strict();
export const CapituloCreateWithoutLibroInputObjectSchema: z.ZodType<Prisma.CapituloCreateWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloCreateWithoutLibroInput>;
export const CapituloCreateWithoutLibroInputObjectZodSchema = makeSchema();
