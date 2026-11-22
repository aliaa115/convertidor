import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { NotaAutorUncheckedCreateNestedManyWithoutCapituloInputObjectSchema as NotaAutorUncheckedCreateNestedManyWithoutCapituloInputObjectSchema } from "./NotaAutorUncheckedCreateNestedManyWithoutCapituloInput.schema.ts";
import { ParrafoUncheckedCreateNestedManyWithoutCapituloInputObjectSchema as ParrafoUncheckedCreateNestedManyWithoutCapituloInputObjectSchema } from "./ParrafoUncheckedCreateNestedManyWithoutCapituloInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			nombre: z.string().optional().nullable(),
			indice: z.number().int().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			estadoId: z.number().int().optional(),
			parrafos: z
				.lazy(
					() =>
						ParrafoUncheckedCreateNestedManyWithoutCapituloInputObjectSchema,
				)
				.optional(),
			notasAutor: z
				.lazy(
					() =>
						NotaAutorUncheckedCreateNestedManyWithoutCapituloInputObjectSchema,
				)
				.optional(),
		})
		.strict();
export const CapituloUncheckedCreateWithoutLibroInputObjectSchema: z.ZodType<Prisma.CapituloUncheckedCreateWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloUncheckedCreateWithoutLibroInput>;
export const CapituloUncheckedCreateWithoutLibroInputObjectZodSchema =
	makeSchema();
