import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			libroId: z.number().int(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const LibroEtiquetaUncheckedCreateWithoutEtiquetaInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaUncheckedCreateWithoutEtiquetaInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaUncheckedCreateWithoutEtiquetaInput>;
export const LibroEtiquetaUncheckedCreateWithoutEtiquetaInputObjectZodSchema =
	makeSchema();
