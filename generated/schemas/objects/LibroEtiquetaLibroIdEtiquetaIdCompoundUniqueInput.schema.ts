import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			libroId: z.number().int(),
			etiquetaId: z.number().int(),
		})
		.strict();
export const LibroEtiquetaLibroIdEtiquetaIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaLibroIdEtiquetaIdCompoundUniqueInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaLibroIdEtiquetaIdCompoundUniqueInput>;
export const LibroEtiquetaLibroIdEtiquetaIdCompoundUniqueInputObjectZodSchema = makeSchema();
