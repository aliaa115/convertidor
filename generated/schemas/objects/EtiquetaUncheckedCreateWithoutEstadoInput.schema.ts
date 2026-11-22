import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroEtiquetaUncheckedCreateNestedManyWithoutEtiquetaInputObjectSchema as LibroEtiquetaUncheckedCreateNestedManyWithoutEtiquetaInputObjectSchema } from "./LibroEtiquetaUncheckedCreateNestedManyWithoutEtiquetaInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			nombre: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			libros: z
				.lazy(
					() =>
						LibroEtiquetaUncheckedCreateNestedManyWithoutEtiquetaInputObjectSchema,
				)
				.optional(),
		})
		.strict();
export const EtiquetaUncheckedCreateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.EtiquetaUncheckedCreateWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EtiquetaUncheckedCreateWithoutEstadoInput>;
export const EtiquetaUncheckedCreateWithoutEstadoInputObjectZodSchema =
	makeSchema();
