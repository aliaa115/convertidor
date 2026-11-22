import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ParrafoCountOutputTypeSelectObjectSchema as ParrafoCountOutputTypeSelectObjectSchema } from "./ParrafoCountOutputTypeSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => ParrafoCountOutputTypeSelectObjectSchema).optional(),
		})
		.strict();
export const ParrafoCountOutputTypeArgsObjectSchema = makeSchema();
export const ParrafoCountOutputTypeArgsObjectZodSchema = makeSchema();
