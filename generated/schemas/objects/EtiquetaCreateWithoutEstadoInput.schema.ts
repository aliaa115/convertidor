import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroEtiquetaCreateNestedManyWithoutEtiquetaInputObjectSchema as LibroEtiquetaCreateNestedManyWithoutEtiquetaInputObjectSchema } from "./LibroEtiquetaCreateNestedManyWithoutEtiquetaInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			libros: z.lazy(() => LibroEtiquetaCreateNestedManyWithoutEtiquetaInputObjectSchema).optional(),
		})
		.strict();
export const EtiquetaCreateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.EtiquetaCreateWithoutEstadoInput> = makeSchema() as unknown as z.ZodType<Prisma.EtiquetaCreateWithoutEstadoInput>;
export const EtiquetaCreateWithoutEstadoInputObjectZodSchema = makeSchema();
