import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { AvatarCountOutputTypeSelectObjectSchema as AvatarCountOutputTypeSelectObjectSchema } from "./AvatarCountOutputTypeSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => AvatarCountOutputTypeSelectObjectSchema).optional(),
		})
		.strict();
export const AvatarCountOutputTypeArgsObjectSchema = makeSchema();
export const AvatarCountOutputTypeArgsObjectZodSchema = makeSchema();
