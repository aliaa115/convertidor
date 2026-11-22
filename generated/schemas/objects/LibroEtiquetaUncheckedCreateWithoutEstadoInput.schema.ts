import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			libroId: z.number().int(),
			etiquetaId: z.number().int(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict();
export const LibroEtiquetaUncheckedCreateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaUncheckedCreateWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaUncheckedCreateWithoutEstadoInput>;
export const LibroEtiquetaUncheckedCreateWithoutEstadoInputObjectZodSchema =
	makeSchema();
