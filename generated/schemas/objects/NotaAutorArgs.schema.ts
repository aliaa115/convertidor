import * as z from "zod";
import { NotaAutorIncludeObjectSchema as NotaAutorIncludeObjectSchema } from "./NotaAutorInclude.schema.ts";
import { NotaAutorSelectObjectSchema as NotaAutorSelectObjectSchema } from "./NotaAutorSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => NotaAutorSelectObjectSchema).optional(),
			include: z.lazy(() => NotaAutorIncludeObjectSchema).optional(),
		})
		.strict();
export const NotaAutorArgsObjectSchema = makeSchema();
export const NotaAutorArgsObjectZodSchema = makeSchema();
