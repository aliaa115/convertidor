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
			libroId: z.number().int(),
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
export const CapituloUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CapituloUncheckedCreateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloUncheckedCreateInput>;
export const CapituloUncheckedCreateInputObjectZodSchema = makeSchema();
