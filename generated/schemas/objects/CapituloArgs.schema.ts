import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CapituloIncludeObjectSchema as CapituloIncludeObjectSchema } from "./CapituloInclude.schema.ts";
import { CapituloSelectObjectSchema as CapituloSelectObjectSchema } from "./CapituloSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => CapituloSelectObjectSchema).optional(),
			include: z.lazy(() => CapituloIncludeObjectSchema).optional(),
		})
		.strict();
export const CapituloArgsObjectSchema = makeSchema();
export const CapituloArgsObjectZodSchema = makeSchema();
