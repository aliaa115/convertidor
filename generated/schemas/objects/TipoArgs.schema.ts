import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { TipoIncludeObjectSchema as TipoIncludeObjectSchema } from "./TipoInclude.schema.ts";
import { TipoSelectObjectSchema as TipoSelectObjectSchema } from "./TipoSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => TipoSelectObjectSchema).optional(),
			include: z.lazy(() => TipoIncludeObjectSchema).optional(),
		})
		.strict();
export const TipoArgsObjectSchema = makeSchema();
export const TipoArgsObjectZodSchema = makeSchema();
