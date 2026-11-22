import * as z from "zod";
import { EtiquetaCountOutputTypeSelectObjectSchema as EtiquetaCountOutputTypeSelectObjectSchema } from "./EtiquetaCountOutputTypeSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => EtiquetaCountOutputTypeSelectObjectSchema).optional(),
		})
		.strict();
export const EtiquetaCountOutputTypeArgsObjectSchema = makeSchema();
export const EtiquetaCountOutputTypeArgsObjectZodSchema = makeSchema();
