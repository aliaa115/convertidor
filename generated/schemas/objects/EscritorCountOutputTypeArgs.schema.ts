import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorCountOutputTypeSelectObjectSchema as EscritorCountOutputTypeSelectObjectSchema } from "./EscritorCountOutputTypeSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z
				.lazy(() => EscritorCountOutputTypeSelectObjectSchema)
				.optional(),
		})
		.strict();
export const EscritorCountOutputTypeArgsObjectSchema = makeSchema();
export const EscritorCountOutputTypeArgsObjectZodSchema = makeSchema();
