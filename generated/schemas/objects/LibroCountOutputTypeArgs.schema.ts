import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCountOutputTypeSelectObjectSchema as LibroCountOutputTypeSelectObjectSchema } from "./LibroCountOutputTypeSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => LibroCountOutputTypeSelectObjectSchema).optional(),
		})
		.strict();
export const LibroCountOutputTypeArgsObjectSchema = makeSchema();
export const LibroCountOutputTypeArgsObjectZodSchema = makeSchema();
