import * as z from "zod";
import { TipoCountOutputTypeSelectObjectSchema as TipoCountOutputTypeSelectObjectSchema } from "./TipoCountOutputTypeSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => TipoCountOutputTypeSelectObjectSchema).optional(),
		})
		.strict();
export const TipoCountOutputTypeArgsObjectSchema = makeSchema();
export const TipoCountOutputTypeArgsObjectZodSchema = makeSchema();
