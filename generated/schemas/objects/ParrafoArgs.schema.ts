import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ParrafoIncludeObjectSchema as ParrafoIncludeObjectSchema } from "./ParrafoInclude.schema.ts";
import { ParrafoSelectObjectSchema as ParrafoSelectObjectSchema } from "./ParrafoSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => ParrafoSelectObjectSchema).optional(),
			include: z.lazy(() => ParrafoIncludeObjectSchema).optional(),
		})
		.strict();
export const ParrafoArgsObjectSchema = makeSchema();
export const ParrafoArgsObjectZodSchema = makeSchema();
