import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioCountOutputTypeSelectObjectSchema as ComentarioCountOutputTypeSelectObjectSchema } from "./ComentarioCountOutputTypeSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z
				.lazy(() => ComentarioCountOutputTypeSelectObjectSchema)
				.optional(),
		})
		.strict();
export const ComentarioCountOutputTypeArgsObjectSchema = makeSchema();
export const ComentarioCountOutputTypeArgsObjectZodSchema = makeSchema();
