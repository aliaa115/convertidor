import * as z from "zod";
import { IdiomaIncludeObjectSchema as IdiomaIncludeObjectSchema } from "./IdiomaInclude.schema.ts";
import { IdiomaSelectObjectSchema as IdiomaSelectObjectSchema } from "./IdiomaSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => IdiomaSelectObjectSchema).optional(),
			include: z.lazy(() => IdiomaIncludeObjectSchema).optional(),
		})
		.strict();
export const IdiomaArgsObjectSchema = makeSchema();
export const IdiomaArgsObjectZodSchema = makeSchema();
