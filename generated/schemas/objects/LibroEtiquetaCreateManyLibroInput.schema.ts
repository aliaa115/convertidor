import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			etiquetaId: z.number().int(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const LibroEtiquetaCreateManyLibroInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaCreateManyLibroInput> = makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaCreateManyLibroInput>;
export const LibroEtiquetaCreateManyLibroInputObjectZodSchema = makeSchema();
