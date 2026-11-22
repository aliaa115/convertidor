import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroEtiquetaFindManySchema as LibroEtiquetaFindManySchema } from "../findManyLibroEtiqueta.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./EstadoArgs.schema.ts";
import { EtiquetaCountOutputTypeArgsObjectSchema as EtiquetaCountOutputTypeArgsObjectSchema } from "./EtiquetaCountOutputTypeArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			estado: z
				.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)])
				.optional(),
			libros: z
				.union([z.boolean(), z.lazy(() => LibroEtiquetaFindManySchema)])
				.optional(),
			_count: z
				.union([
					z.boolean(),
					z.lazy(() => EtiquetaCountOutputTypeArgsObjectSchema),
				])
				.optional(),
		})
		.strict();
export const EtiquetaIncludeObjectSchema: z.ZodType<Prisma.EtiquetaInclude> =
	makeSchema() as unknown as z.ZodType<Prisma.EtiquetaInclude>;
export const EtiquetaIncludeObjectZodSchema = makeSchema();
