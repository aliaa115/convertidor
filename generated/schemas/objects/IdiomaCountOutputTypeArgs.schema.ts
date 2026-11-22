import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { IdiomaCountOutputTypeSelectObjectSchema as IdiomaCountOutputTypeSelectObjectSchema } from "./IdiomaCountOutputTypeSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => IdiomaCountOutputTypeSelectObjectSchema).optional(),
		})
		.strict();
export const IdiomaCountOutputTypeArgsObjectSchema = makeSchema();
export const IdiomaCountOutputTypeArgsObjectZodSchema = makeSchema();
