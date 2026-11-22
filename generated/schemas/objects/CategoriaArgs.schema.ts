import * as z from "zod";
import { CategoriaIncludeObjectSchema as CategoriaIncludeObjectSchema } from "./CategoriaInclude.schema.ts";
import { CategoriaSelectObjectSchema as CategoriaSelectObjectSchema } from "./CategoriaSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => CategoriaSelectObjectSchema).optional(),
			include: z.lazy(() => CategoriaIncludeObjectSchema).optional(),
		})
		.strict();
export const CategoriaArgsObjectSchema = makeSchema();
export const CategoriaArgsObjectZodSchema = makeSchema();
