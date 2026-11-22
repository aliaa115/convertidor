import * as z from "zod";
import { ListaIncludeObjectSchema as ListaIncludeObjectSchema } from "./ListaInclude.schema.ts";
import { ListaSelectObjectSchema as ListaSelectObjectSchema } from "./ListaSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => ListaSelectObjectSchema).optional(),
			include: z.lazy(() => ListaIncludeObjectSchema).optional(),
		})
		.strict();
export const ListaArgsObjectSchema = makeSchema();
export const ListaArgsObjectZodSchema = makeSchema();
