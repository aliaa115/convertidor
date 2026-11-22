import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorIncludeObjectSchema as EscritorIncludeObjectSchema } from "./EscritorInclude.schema.ts";
import { EscritorSelectObjectSchema as EscritorSelectObjectSchema } from "./EscritorSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => EscritorSelectObjectSchema).optional(),
			include: z.lazy(() => EscritorIncludeObjectSchema).optional(),
		})
		.strict();
export const EscritorArgsObjectSchema = makeSchema();
export const EscritorArgsObjectZodSchema = makeSchema();
