import * as z from "zod";
import { ListaLibroIncludeObjectSchema as ListaLibroIncludeObjectSchema } from "./ListaLibroInclude.schema.ts";
import { ListaLibroSelectObjectSchema as ListaLibroSelectObjectSchema } from "./ListaLibroSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => ListaLibroSelectObjectSchema).optional(),
			include: z.lazy(() => ListaLibroIncludeObjectSchema).optional(),
		})
		.strict();
export const ListaLibroArgsObjectSchema = makeSchema();
export const ListaLibroArgsObjectZodSchema = makeSchema();
