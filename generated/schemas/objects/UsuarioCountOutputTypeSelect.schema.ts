import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { UsuarioCountOutputTypeCountListasArgsObjectSchema as UsuarioCountOutputTypeCountListasArgsObjectSchema } from "./UsuarioCountOutputTypeCountListasArgs.schema.ts";
import { UsuarioCountOutputTypeCountNotificacionsArgsObjectSchema as UsuarioCountOutputTypeCountNotificacionsArgsObjectSchema } from "./UsuarioCountOutputTypeCountNotificacionsArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			listas: z.union([z.boolean(), z.lazy(() => UsuarioCountOutputTypeCountListasArgsObjectSchema)]).optional(),
			notificacions: z.union([z.boolean(), z.lazy(() => UsuarioCountOutputTypeCountNotificacionsArgsObjectSchema)]).optional(),
		})
		.strict();
export const UsuarioCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UsuarioCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioCountOutputTypeSelect>;
export const UsuarioCountOutputTypeSelectObjectZodSchema = makeSchema();
