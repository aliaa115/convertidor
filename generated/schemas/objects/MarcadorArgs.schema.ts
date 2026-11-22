import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { MarcadorIncludeObjectSchema as MarcadorIncludeObjectSchema } from "./MarcadorInclude.schema.ts";
import { MarcadorSelectObjectSchema as MarcadorSelectObjectSchema } from "./MarcadorSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => MarcadorSelectObjectSchema).optional(),
			include: z.lazy(() => MarcadorIncludeObjectSchema).optional(),
		})
		.strict();
export const MarcadorArgsObjectSchema = makeSchema();
export const MarcadorArgsObjectZodSchema = makeSchema();
