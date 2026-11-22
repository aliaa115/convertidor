import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateNestedOneWithoutCapitulosInputObjectSchema as EstadoCreateNestedOneWithoutCapitulosInputObjectSchema } from "./EstadoCreateNestedOneWithoutCapitulosInput.schema.ts";
import { LibroCreateNestedOneWithoutCapitulosInputObjectSchema as LibroCreateNestedOneWithoutCapitulosInputObjectSchema } from "./LibroCreateNestedOneWithoutCapitulosInput.schema.ts";
import { ParrafoCreateNestedManyWithoutCapituloInputObjectSchema as ParrafoCreateNestedManyWithoutCapituloInputObjectSchema } from "./ParrafoCreateNestedManyWithoutCapituloInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z.string().optional().nullable(),
			indice: z.number().int().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			libro: z.lazy(() => LibroCreateNestedOneWithoutCapitulosInputObjectSchema),
			estado: z.lazy(() => EstadoCreateNestedOneWithoutCapitulosInputObjectSchema).optional(),
			parrafos: z.lazy(() => ParrafoCreateNestedManyWithoutCapituloInputObjectSchema).optional(),
		})
		.strict();
export const CapituloCreateWithoutNotasAutorInputObjectSchema: z.ZodType<Prisma.CapituloCreateWithoutNotasAutorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloCreateWithoutNotasAutorInput>;
export const CapituloCreateWithoutNotasAutorInputObjectZodSchema = makeSchema();
