import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./EstadoArgs.schema.ts";
import { EtiquetaArgsObjectSchema as EtiquetaArgsObjectSchema } from "./EtiquetaArgs.schema.ts";
import { LibroArgsObjectSchema as LibroArgsObjectSchema } from "./LibroArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			estado: z
				.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)])
				.optional(),
			libro: z
				.union([z.boolean(), z.lazy(() => LibroArgsObjectSchema)])
				.optional(),
			etiqueta: z
				.union([z.boolean(), z.lazy(() => EtiquetaArgsObjectSchema)])
				.optional(),
		})
		.strict();
export const LibroEtiquetaIncludeObjectSchema: z.ZodType<Prisma.LibroEtiquetaInclude> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroEtiquetaInclude>;
export const LibroEtiquetaIncludeObjectZodSchema = makeSchema();
