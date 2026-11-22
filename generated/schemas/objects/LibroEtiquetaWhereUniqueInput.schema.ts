import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroEtiquetaLibroIdEtiquetaIdCompoundUniqueInputObjectSchema as LibroEtiquetaLibroIdEtiquetaIdCompoundUniqueInputObjectSchema } from "./LibroEtiquetaLibroIdEtiquetaIdCompoundUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			libroId_etiquetaId: z.lazy(() => LibroEtiquetaLibroIdEtiquetaIdCompoundUniqueInputObjectSchema).optional(),
		})
		.strict();
export const LibroEtiquetaWhereUniqueInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaWhereUniqueInput>;
export const LibroEtiquetaWhereUniqueInputObjectZodSchema = makeSchema();
