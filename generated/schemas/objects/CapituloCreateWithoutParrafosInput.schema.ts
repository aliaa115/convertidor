import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateNestedOneWithoutCapitulosInputObjectSchema as EstadoCreateNestedOneWithoutCapitulosInputObjectSchema } from "./EstadoCreateNestedOneWithoutCapitulosInput.schema.ts";
import { LibroCreateNestedOneWithoutCapitulosInputObjectSchema as LibroCreateNestedOneWithoutCapitulosInputObjectSchema } from "./LibroCreateNestedOneWithoutCapitulosInput.schema.ts";
import { NotaAutorCreateNestedManyWithoutCapituloInputObjectSchema as NotaAutorCreateNestedManyWithoutCapituloInputObjectSchema } from "./NotaAutorCreateNestedManyWithoutCapituloInput.schema.ts";

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
			estado: z
				.lazy(() => EstadoCreateNestedOneWithoutCapitulosInputObjectSchema)
				.optional(),
			notasAutor: z
				.lazy(() => NotaAutorCreateNestedManyWithoutCapituloInputObjectSchema)
				.optional(),
		})
		.strict();
export const CapituloCreateWithoutParrafosInputObjectSchema: z.ZodType<Prisma.CapituloCreateWithoutParrafosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloCreateWithoutParrafosInput>;
export const CapituloCreateWithoutParrafosInputObjectZodSchema = makeSchema();
