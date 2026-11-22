import * as z from "zod";
import { LibroEtiquetaIncludeObjectSchema as LibroEtiquetaIncludeObjectSchema } from "./LibroEtiquetaInclude.schema.ts";
import { LibroEtiquetaSelectObjectSchema as LibroEtiquetaSelectObjectSchema } from "./LibroEtiquetaSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => LibroEtiquetaSelectObjectSchema).optional(),
			include: z.lazy(() => LibroEtiquetaIncludeObjectSchema).optional(),
		})
		.strict();
export const LibroEtiquetaArgsObjectSchema = makeSchema();
export const LibroEtiquetaArgsObjectZodSchema = makeSchema();
