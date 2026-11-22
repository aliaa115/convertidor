import * as z from "zod";
import { EtiquetaIncludeObjectSchema as EtiquetaIncludeObjectSchema } from "./EtiquetaInclude.schema.ts";
import { EtiquetaSelectObjectSchema as EtiquetaSelectObjectSchema } from "./EtiquetaSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => EtiquetaSelectObjectSchema).optional(),
			include: z.lazy(() => EtiquetaIncludeObjectSchema).optional(),
		})
		.strict();
export const EtiquetaArgsObjectSchema = makeSchema();
export const EtiquetaArgsObjectZodSchema = makeSchema();
