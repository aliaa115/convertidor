import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { IdiomaCountOutputTypeCountLibrosArgsObjectSchema as IdiomaCountOutputTypeCountLibrosArgsObjectSchema } from "./IdiomaCountOutputTypeCountLibrosArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			libros: z.union([z.boolean(), z.lazy(() => IdiomaCountOutputTypeCountLibrosArgsObjectSchema)]).optional(),
		})
		.strict();
export const IdiomaCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.IdiomaCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.IdiomaCountOutputTypeSelect>;
export const IdiomaCountOutputTypeSelectObjectZodSchema = makeSchema();
