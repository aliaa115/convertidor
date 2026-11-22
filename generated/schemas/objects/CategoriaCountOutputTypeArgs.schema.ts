import * as z from "zod";
import { CategoriaCountOutputTypeSelectObjectSchema as CategoriaCountOutputTypeSelectObjectSchema } from "./CategoriaCountOutputTypeSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => CategoriaCountOutputTypeSelectObjectSchema).optional(),
		})
		.strict();
export const CategoriaCountOutputTypeArgsObjectSchema = makeSchema();
export const CategoriaCountOutputTypeArgsObjectZodSchema = makeSchema();
