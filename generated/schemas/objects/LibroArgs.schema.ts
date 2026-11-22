import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroIncludeObjectSchema as LibroIncludeObjectSchema } from "./LibroInclude.schema.ts";
import { LibroSelectObjectSchema as LibroSelectObjectSchema } from "./LibroSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => LibroSelectObjectSchema).optional(),
			include: z.lazy(() => LibroIncludeObjectSchema).optional(),
		})
		.strict();
export const LibroArgsObjectSchema = makeSchema();
export const LibroArgsObjectZodSchema = makeSchema();
