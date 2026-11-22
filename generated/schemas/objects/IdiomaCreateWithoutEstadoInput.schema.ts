import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCreateNestedManyWithoutIdiomaInputObjectSchema as LibroCreateNestedManyWithoutIdiomaInputObjectSchema } from "./LibroCreateNestedManyWithoutIdiomaInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z.string().optional().nullable(),
			siglas: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			libros: z.lazy(() => LibroCreateNestedManyWithoutIdiomaInputObjectSchema).optional(),
		})
		.strict();
export const IdiomaCreateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.IdiomaCreateWithoutEstadoInput> = makeSchema() as unknown as z.ZodType<Prisma.IdiomaCreateWithoutEstadoInput>;
export const IdiomaCreateWithoutEstadoInputObjectZodSchema = makeSchema();
