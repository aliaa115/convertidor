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
export const LibroEtiquetaCreateManyEstadoInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaCreateManyEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaCreateManyEstadoInput>;
export const LibroEtiquetaCreateManyEstadoInputObjectZodSchema = makeSchema();
