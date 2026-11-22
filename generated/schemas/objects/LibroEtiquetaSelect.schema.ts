import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./EstadoArgs.schema.ts";
import { EtiquetaArgsObjectSchema as EtiquetaArgsObjectSchema } from "./EtiquetaArgs.schema.ts";
import { LibroArgsObjectSchema as LibroArgsObjectSchema } from "./LibroArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			libroId: z.boolean().optional(),
			etiquetaId: z.boolean().optional(),
			createdAt: z.boolean().optional(),
			updatedAt: z.boolean().optional(),
			estadoId: z.boolean().optional(),
			estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
			libro: z.union([z.boolean(), z.lazy(() => LibroArgsObjectSchema)]).optional(),
			etiqueta: z.union([z.boolean(), z.lazy(() => EtiquetaArgsObjectSchema)]).optional(),
		})
		.strict();
export const LibroEtiquetaSelectObjectSchema: z.ZodType<Prisma.LibroEtiquetaSelect> = makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaSelect>;
export const LibroEtiquetaSelectObjectZodSchema = makeSchema();
