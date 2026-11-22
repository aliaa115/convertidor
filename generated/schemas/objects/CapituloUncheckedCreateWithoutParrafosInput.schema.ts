import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { NotaAutorUncheckedCreateNestedManyWithoutCapituloInputObjectSchema as NotaAutorUncheckedCreateNestedManyWithoutCapituloInputObjectSchema } from "./NotaAutorUncheckedCreateNestedManyWithoutCapituloInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			nombre: z.string().optional().nullable(),
			indice: z.number().int().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			libroId: z.number().int(),
			estadoId: z.number().int().optional(),
			notasAutor: z
				.lazy(
					() =>
						NotaAutorUncheckedCreateNestedManyWithoutCapituloInputObjectSchema,
				)
				.optional(),
		})
		.strict();
export const CapituloUncheckedCreateWithoutParrafosInputObjectSchema: z.ZodType<Prisma.CapituloUncheckedCreateWithoutParrafosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloUncheckedCreateWithoutParrafosInput>;
export const CapituloUncheckedCreateWithoutParrafosInputObjectZodSchema =
	makeSchema();
