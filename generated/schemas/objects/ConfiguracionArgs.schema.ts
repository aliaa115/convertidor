import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ConfiguracionIncludeObjectSchema as ConfiguracionIncludeObjectSchema } from "./ConfiguracionInclude.schema.ts";
import { ConfiguracionSelectObjectSchema as ConfiguracionSelectObjectSchema } from "./ConfiguracionSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => ConfiguracionSelectObjectSchema).optional(),
			include: z.lazy(() => ConfiguracionIncludeObjectSchema).optional(),
		})
		.strict();
export const ConfiguracionArgsObjectSchema = makeSchema();
export const ConfiguracionArgsObjectZodSchema = makeSchema();
