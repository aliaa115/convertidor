import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EtiquetaCountOutputTypeCountLibrosArgsObjectSchema as EtiquetaCountOutputTypeCountLibrosArgsObjectSchema } from "./EtiquetaCountOutputTypeCountLibrosArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			libros: z.union([z.boolean(), z.lazy(() => EtiquetaCountOutputTypeCountLibrosArgsObjectSchema)]).optional(),
		})
		.strict();
export const EtiquetaCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.EtiquetaCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.EtiquetaCountOutputTypeSelect>;
export const EtiquetaCountOutputTypeSelectObjectZodSchema = makeSchema();
