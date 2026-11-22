import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
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
			estadoId: z.number().int().optional(),
			parrafos: z.lazy(() => ParrafoUncheckedCreateNestedManyWithoutCapituloInputObjectSchema).optional(),
		})
		.strict();
export const CapituloUncheckedCreateWithoutNotasAutorInputObjectSchema: z.ZodType<Prisma.CapituloUncheckedCreateWithoutNotasAutorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloUncheckedCreateWithoutNotasAutorInput>;
export const CapituloUncheckedCreateWithoutNotasAutorInputObjectZodSchema = makeSchema();
