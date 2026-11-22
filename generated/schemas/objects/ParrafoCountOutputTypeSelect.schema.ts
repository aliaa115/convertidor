import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ParrafoCountOutputTypeCountComentariosArgsObjectSchema as ParrafoCountOutputTypeCountComentariosArgsObjectSchema } from "./ParrafoCountOutputTypeCountComentariosArgs.schema.ts";
import { ParrafoCountOutputTypeCountMarcadoresArgsObjectSchema as ParrafoCountOutputTypeCountMarcadoresArgsObjectSchema } from "./ParrafoCountOutputTypeCountMarcadoresArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			comentarios: z.union([z.boolean(), z.lazy(() => ParrafoCountOutputTypeCountComentariosArgsObjectSchema)]).optional(),
			marcadores: z.union([z.boolean(), z.lazy(() => ParrafoCountOutputTypeCountMarcadoresArgsObjectSchema)]).optional(),
		})
		.strict();
export const ParrafoCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ParrafoCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ParrafoCountOutputTypeSelect>;
export const ParrafoCountOutputTypeSelectObjectZodSchema = makeSchema();
