import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CapituloCountOutputTypeSelectObjectSchema as CapituloCountOutputTypeSelectObjectSchema } from "./CapituloCountOutputTypeSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z
				.lazy(() => CapituloCountOutputTypeSelectObjectSchema)
				.optional(),
		})
		.strict();
export const CapituloCountOutputTypeArgsObjectSchema = makeSchema();
export const CapituloCountOutputTypeArgsObjectZodSchema = makeSchema();
