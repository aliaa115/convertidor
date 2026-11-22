import * as z from "zod";
import { EstadoCountOutputTypeSelectObjectSchema as EstadoCountOutputTypeSelectObjectSchema } from "./EstadoCountOutputTypeSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => EstadoCountOutputTypeSelectObjectSchema).optional(),
		})
		.strict();
export const EstadoCountOutputTypeArgsObjectSchema = makeSchema();
export const EstadoCountOutputTypeArgsObjectZodSchema = makeSchema();
