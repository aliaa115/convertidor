import * as z from "zod";
import { AvatarCountOutputTypeSelectObjectSchema as AvatarCountOutputTypeSelectObjectSchema } from "./AvatarCountOutputTypeSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => AvatarCountOutputTypeSelectObjectSchema).optional(),
		})
		.strict();
export const AvatarCountOutputTypeArgsObjectSchema = makeSchema();
export const AvatarCountOutputTypeArgsObjectZodSchema = makeSchema();
