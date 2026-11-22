import * as z from "zod";
import { SeguirUsuarioIncludeObjectSchema as SeguirUsuarioIncludeObjectSchema } from "./SeguirUsuarioInclude.schema.ts";
import { SeguirUsuarioSelectObjectSchema as SeguirUsuarioSelectObjectSchema } from "./SeguirUsuarioSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => SeguirUsuarioSelectObjectSchema).optional(),
			include: z.lazy(() => SeguirUsuarioIncludeObjectSchema).optional(),
		})
		.strict();
export const SeguirUsuarioArgsObjectSchema = makeSchema();
export const SeguirUsuarioArgsObjectZodSchema = makeSchema();
