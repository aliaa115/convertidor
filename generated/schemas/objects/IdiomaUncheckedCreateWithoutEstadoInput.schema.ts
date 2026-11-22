import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroUncheckedCreateNestedManyWithoutIdiomaInputObjectSchema as LibroUncheckedCreateNestedManyWithoutIdiomaInputObjectSchema } from "./LibroUncheckedCreateNestedManyWithoutIdiomaInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			nombre: z.string().optional().nullable(),
			siglas: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			libros: z.lazy(() => LibroUncheckedCreateNestedManyWithoutIdiomaInputObjectSchema).optional(),
		})
		.strict();
export const IdiomaUncheckedCreateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.IdiomaUncheckedCreateWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.IdiomaUncheckedCreateWithoutEstadoInput>;
export const IdiomaUncheckedCreateWithoutEstadoInputObjectZodSchema = makeSchema();
