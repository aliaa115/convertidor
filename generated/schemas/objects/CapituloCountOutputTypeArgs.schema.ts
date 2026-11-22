import * as z from "zod";
import { CapituloCountOutputTypeSelectObjectSchema as CapituloCountOutputTypeSelectObjectSchema } from "./CapituloCountOutputTypeSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => CapituloCountOutputTypeSelectObjectSchema).optional(),
		})
		.strict();
export const CapituloCountOutputTypeArgsObjectSchema = makeSchema();
export const CapituloCountOutputTypeArgsObjectZodSchema = makeSchema();
