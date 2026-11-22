import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { UsuarioArgsObjectSchema as UsuarioArgsObjectSchema } from "./UsuarioArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			usuario: z
				.union([z.boolean(), z.lazy(() => UsuarioArgsObjectSchema)])
				.optional(),
		})
		.strict();
export const NotificacionIncludeObjectSchema: z.ZodType<Prisma.NotificacionInclude> =
	makeSchema() as unknown as z.ZodType<Prisma.NotificacionInclude>;
export const NotificacionIncludeObjectZodSchema = makeSchema();
