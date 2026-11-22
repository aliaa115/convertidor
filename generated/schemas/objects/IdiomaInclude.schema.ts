import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroFindManySchema as LibroFindManySchema } from "../findManyLibro.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./EstadoArgs.schema.ts";
import { IdiomaCountOutputTypeArgsObjectSchema as IdiomaCountOutputTypeArgsObjectSchema } from "./IdiomaCountOutputTypeArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			estado: z.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)]).optional(),
			libros: z.union([z.boolean(), z.lazy(() => LibroFindManySchema)]).optional(),
			_count: z.union([z.boolean(), z.lazy(() => IdiomaCountOutputTypeArgsObjectSchema)]).optional(),
		})
		.strict();
export const IdiomaIncludeObjectSchema: z.ZodType<Prisma.IdiomaInclude> = makeSchema() as unknown as z.ZodType<Prisma.IdiomaInclude>;
export const IdiomaIncludeObjectZodSchema = makeSchema();
