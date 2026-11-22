import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			etiquetaId: z.number().int(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const LibroEtiquetaUncheckedCreateWithoutLibroInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaUncheckedCreateWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaUncheckedCreateWithoutLibroInput>;
export const LibroEtiquetaUncheckedCreateWithoutLibroInputObjectZodSchema =
	makeSchema();
