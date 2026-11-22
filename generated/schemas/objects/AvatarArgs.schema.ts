import * as z from "zod";
import { AvatarIncludeObjectSchema as AvatarIncludeObjectSchema } from "./AvatarInclude.schema.ts";
import { AvatarSelectObjectSchema as AvatarSelectObjectSchema } from "./AvatarSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => AvatarSelectObjectSchema).optional(),
			include: z.lazy(() => AvatarIncludeObjectSchema).optional(),
		})
		.strict();
export const AvatarArgsObjectSchema = makeSchema();
export const AvatarArgsObjectZodSchema = makeSchema();
