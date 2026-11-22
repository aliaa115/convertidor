import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
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
			libroId: z.number().int(),
			parrafos: z.lazy(() => ParrafoUncheckedCreateNestedManyWithoutCapituloInputObjectSchema).optional(),
			notasAutor: z.lazy(() => NotaAutorUncheckedCreateNestedManyWithoutCapituloInputObjectSchema).optional(),
		})
		.strict();
export const CapituloUncheckedCreateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.CapituloUncheckedCreateWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloUncheckedCreateWithoutEstadoInput>;
export const CapituloUncheckedCreateWithoutEstadoInputObjectZodSchema = makeSchema();
