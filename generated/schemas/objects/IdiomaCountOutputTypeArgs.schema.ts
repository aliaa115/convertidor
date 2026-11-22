import * as z from "zod";
import { IdiomaCountOutputTypeSelectObjectSchema as IdiomaCountOutputTypeSelectObjectSchema } from "./IdiomaCountOutputTypeSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => IdiomaCountOutputTypeSelectObjectSchema).optional(),
		})
		.strict();
export const IdiomaCountOutputTypeArgsObjectSchema = makeSchema();
export const IdiomaCountOutputTypeArgsObjectZodSchema = makeSchema();
