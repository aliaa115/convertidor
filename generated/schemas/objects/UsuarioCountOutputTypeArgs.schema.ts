import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { UsuarioCountOutputTypeSelectObjectSchema as UsuarioCountOutputTypeSelectObjectSchema } from "./UsuarioCountOutputTypeSelect.schema.ts";

const makeSchema = () =>
	z
		.object({
			select: z.lazy(() => UsuarioCountOutputTypeSelectObjectSchema).optional(),
		})
		.strict();
export const UsuarioCountOutputTypeArgsObjectSchema = makeSchema();
export const UsuarioCountOutputTypeArgsObjectZodSchema = makeSchema();
