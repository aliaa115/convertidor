import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { GlosarioIncludeObjectSchema as GlosarioIncludeObjectSchema } from "./GlosarioInclude.schema.ts";
import { GlosarioSelectObjectSchema as GlosarioSelectObjectSchema } from "./GlosarioSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => GlosarioSelectObjectSchema).optional(),
			include: z.lazy(() => GlosarioIncludeObjectSchema).optional(),
		})
		.strict();
export const GlosarioArgsObjectSchema = makeSchema();
export const GlosarioArgsObjectZodSchema = makeSchema();
