import * as z from "zod";
import { EstadoIncludeObjectSchema as EstadoIncludeObjectSchema } from "./EstadoInclude.schema.ts";
import { EstadoSelectObjectSchema as EstadoSelectObjectSchema } from "./EstadoSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => EstadoSelectObjectSchema).optional(),
			include: z.lazy(() => EstadoIncludeObjectSchema).optional(),
		})
		.strict();
export const EstadoArgsObjectSchema = makeSchema();
export const EstadoArgsObjectZodSchema = makeSchema();
