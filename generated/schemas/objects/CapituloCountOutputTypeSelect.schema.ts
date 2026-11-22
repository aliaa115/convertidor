import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { CapituloCountOutputTypeCountNotasAutorArgsObjectSchema as CapituloCountOutputTypeCountNotasAutorArgsObjectSchema } from "./CapituloCountOutputTypeCountNotasAutorArgs.schema.ts";
import { CapituloCountOutputTypeCountParrafosArgsObjectSchema as CapituloCountOutputTypeCountParrafosArgsObjectSchema } from "./CapituloCountOutputTypeCountParrafosArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			parrafos: z.union([z.boolean(), z.lazy(() => CapituloCountOutputTypeCountParrafosArgsObjectSchema)]).optional(),
			notasAutor: z.union([z.boolean(), z.lazy(() => CapituloCountOutputTypeCountNotasAutorArgsObjectSchema)]).optional(),
		})
		.strict();
export const CapituloCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CapituloCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CapituloCountOutputTypeSelect>;
export const CapituloCountOutputTypeSelectObjectZodSchema = makeSchema();
