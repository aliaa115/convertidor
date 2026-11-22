import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			libroId: z.number().int(),
			etiquetaId: z.number().int(),
			createdAt: z.coerce.date().optional(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const LibroEtiquetaUncheckedCreateInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaUncheckedCreateInput>;
export const LibroEtiquetaUncheckedCreateInputObjectZodSchema = makeSchema();
