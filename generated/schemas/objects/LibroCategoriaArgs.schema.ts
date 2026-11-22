import * as z from "zod";
import { LibroCategoriaIncludeObjectSchema as LibroCategoriaIncludeObjectSchema } from "./LibroCategoriaInclude.schema.ts";
import { LibroCategoriaSelectObjectSchema as LibroCategoriaSelectObjectSchema } from "./LibroCategoriaSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => LibroCategoriaSelectObjectSchema).optional(),
			include: z.lazy(() => LibroCategoriaIncludeObjectSchema).optional(),
		})
		.strict();
export const LibroCategoriaArgsObjectSchema = makeSchema();
export const LibroCategoriaArgsObjectZodSchema = makeSchema();
