import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioIncludeObjectSchema as ComentarioIncludeObjectSchema } from "./ComentarioInclude.schema.ts";
import { ComentarioSelectObjectSchema as ComentarioSelectObjectSchema } from "./ComentarioSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => ComentarioSelectObjectSchema).optional(),
			include: z.lazy(() => ComentarioIncludeObjectSchema).optional(),
		})
		.strict();
export const ComentarioArgsObjectSchema = makeSchema();
export const ComentarioArgsObjectZodSchema = makeSchema();
