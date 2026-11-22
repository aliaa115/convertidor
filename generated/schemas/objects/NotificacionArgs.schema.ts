import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { NotificacionIncludeObjectSchema as NotificacionIncludeObjectSchema } from "./NotificacionInclude.schema.ts";
import { NotificacionSelectObjectSchema as NotificacionSelectObjectSchema } from "./NotificacionSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => NotificacionSelectObjectSchema).optional(),
			include: z.lazy(() => NotificacionIncludeObjectSchema).optional(),
		})
		.strict();
export const NotificacionArgsObjectSchema = makeSchema();
export const NotificacionArgsObjectZodSchema = makeSchema();
